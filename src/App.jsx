import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout.jsx'
import Home from './pages/Home.jsx'
import SuperG from './pages/SuperG.jsx'
import Kalasorkestern from './pages/Kalasorkestern.jsx'
import Pianoflytt from './pages/Pianoflytt.jsx'
import Kormusik from './pages/Kormusik.jsx'
import './index.css'
import './styles/pages.css'
import './styles/layout.css'
import './styles/home.css'

function App() {
 return (
   <Routes>
     <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
       <Route path="den-magiske-super-g" element={<SuperG />} />
       <Route path="kalasorkestern" element={<Kalasorkestern />} />
       <Route path="pianoflytt" element={<Pianoflytt />} />
       <Route path="kormusik" element={<Kormusik />} />
     </Route>
   </Routes>
 )
}

export default App
