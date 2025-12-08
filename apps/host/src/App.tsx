import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import About from './pages/About'
import ProjectDetails from './pages/ProjectDetails'
import Laboratory from './pages/Laboratory'
import Sidebar from './components/Sidebar'

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/certificados" element={<Certificates />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/laboratorio" element={<Laboratory />} />
          <Route path="/projeto/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  )
}
