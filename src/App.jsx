import { useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import Studio from './pages/Studio'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Chatbot from './components/Chatbot'

function PageTransition({ children }) {
  const location = useLocation()
  const containerRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 80, x: 40, filter: 'blur(10px)' },
        { opacity: 1, y: 0, x: 0, filter: 'blur(0px)', duration: 0.95, ease: 'power3.out' }
      )
    },
    { dependencies: [location.pathname], scope: containerRef }
  )

  return <div ref={containerRef} className="w-full min-h-screen">{children}</div>
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageTransition><Home /></PageTransition>} />
      <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
      <Route path="/studio" element={<PageTransition><Studio /></PageTransition>} />
      <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
      <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      <Route path="*" element={<PageTransition><Home /></PageTransition>} />
    </Routes>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream-50 text-studioDark relative selection:bg-studioDark selection:text-cream-50">
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Chatbot />
      </div>
    </Router>
  )
}
