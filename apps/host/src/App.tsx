import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import About from './pages/About'
import Certificates from './pages/Certificates'
import Laboratory from './pages/Laboratory'
import ProjectDetails from './pages/ProjectDetails'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/certificados" element={<Certificates />} />
          <Route path="/sobre-mim" element={<About />} />
          <Route path="/laboratorio" element={<Laboratory />} />
          <Route path="/projeto/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  )
}
