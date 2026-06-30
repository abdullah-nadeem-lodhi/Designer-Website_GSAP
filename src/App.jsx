import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Studio from './pages/Studio'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50 text-studioDark relative selection:bg-studioDark selection:text-cream-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Chatbot />
      </div>
    </Router>
  )
}
