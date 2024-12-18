import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={
            <div style={{ display: 'flex' }}>
              <div style={{ width: '300px' }}>
                <Projects />
              </div>
              <div style={{ flex: 1 }}>
                <ProjectDetail />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
