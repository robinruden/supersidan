import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import DenMagiskeSuperG from './pages/DenMagiskeSuperG.jsx'
import Kalasorkestern from './pages/Kalasorkestern.jsx'
import Pianoflytt from './pages/Pianoflytt.jsx'
import Kormusik from './pages/Kormusik.jsx'

function App() {
 return (
   <Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="den-magiske-super-g" element={<DenMagiskeSuperG />} />
       <Route path="kalasorkestern" element={<Kalasorkestern />} />
       <Route path="pianoflytt" element={<Pianoflytt />} />
       <Route path="kormusik" element={<Kormusik />} />
     </Route>
   </Routes>
 )
}

export default App
