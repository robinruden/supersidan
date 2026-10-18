import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import SuperG from './pages/SuperG.jsx'
import Kalasorkestern from './pages/Kalasorkestern.jsx'
import Pianoflytt from './pages/Pianoflytt.jsx'
import Kormusik from './pages/Kormusik.jsx'
import Seo from './components/Seo.jsx'
import NotFound from './pages/NotFound.jsx'
import './index.css'
import './styles/pages.css'
import './styles/layout.css'
import './styles/home.css'

function App() {
 return (
   <><Seo /><Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="den-magiske-super-g.html" element={<SuperG />} />
       <Route path="kalasorkestern.html" element={<Kalasorkestern />} />
       <Route path="pianoflytt.html" element={<Pianoflytt />} />
       <Route path="k-rmusik.html" element={<Kormusik />} />
       <Route path="*" element={<NotFound />} />
     </Route>
   </Routes></>
 )
}

export default App
