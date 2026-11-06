#!/usr/bin/env bash
set -euo pipefail

for name in SFTP_HOST SFTP_USER SSHPASS SFTP_PATH SFTP_KNOWN_HOSTS; do
  if [[ -z "${!name:-}" ]]; then
    echo "Missing required deployment setting: $name" >&2
    exit 1
  fi
done

deploy_tmp=$(mktemp -d)
trap 'rm -rf "$deploy_tmp"' EXIT
printf '%s\n' "$SFTP_KNOWN_HOSTS" > "$deploy_tmp/known_hosts"
chmod 600 "$deploy_tmp/known_hosts"

# Quote batch paths and upload assets before the HTML that references them.
# The destination must already exist. Existing unrelated files are preserved.
python3 - "$deploy_tmp/upload.sftp" <<'PY'
import os
from pathlib import Path
import sys

def quote(value):
    if any(char in value for char in '\n\r\0'):
        raise ValueError('Invalid character in deployment path')
    return '"' + value.replace('\\', '\\\\').replace('"', '\\"') + '"'

root = Path('dist')
if not (root / 'index.html').is_file():
    raise SystemExit('Build the site before uploading: dist/index.html is missing')
commands = ['cd ' + quote(os.environ['SFTP_PATH'])]
if os.environ.get('DEPLOY_BACKUP_ONLY') == 'true':
    backup = Path('deployment-backup')
    backup.mkdir(exist_ok=True)
    # These pages exist on both the original Website Builder site and our site.
    # Stop before publishing if an expected page cannot be backed up.
    for name in ['index.html', 'den-magiske-super-g.html', 'k-rmusik.html',
                 'kalasorkestern.html', 'pianoflytt.html']:
        commands.append('get ' + quote(name) + ' ' + quote((backup / name).as_posix()))
    for name in ['.htaccess', 'robots.txt', 'sitemap.xml', '404.html']:
        commands.append('-get ' + quote(name) + ' ' + quote((backup / name).as_posix()))
    Path(sys.argv[1]).write_text('\n'.join(commands) + '\n')
    sys.exit(0)

for directory in sorted(path for path in root.rglob('*') if path.is_dir()):
    commands.append('-mkdir ' + quote(directory.relative_to(root).as_posix()))
files = sorted((path for path in root.rglob('*') if path.is_file()),
               key=lambda path: (path.suffix == '.html', path.as_posix()))
for path in files:
    commands.append('put ' + quote(path.as_posix()) + ' ' + quote(path.relative_to(root).as_posix()))
Path(sys.argv[1]).write_text('\n'.join(commands) + '\n')
PY

sshpass -e sftp \
  -oBatchMode=no \
  -oStrictHostKeyChecking=yes \
  -oUserKnownHostsFile="$deploy_tmp/known_hosts" \
  -oConnectTimeout=30 \
  -P "${SFTP_PORT:-22}" \
  -b "$deploy_tmp/upload.sftp" \
  "${SFTP_USER}@${SFTP_HOST}"
