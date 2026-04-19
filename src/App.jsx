import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [modalVideo, setModalVideo] = useState(null)

  const openVideoModal = (videoSrc) => {
    setModalVideo(videoSrc)
  }

  const closeVideoModal = () => {
    setModalVideo(null)
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <WorkExperience />
      <Projects openVideoModal={openVideoModal} />
      <Contact />
      <Footer />
      <ThemeToggle />
      {modalVideo && (
        <VideoModal videoSrc={modalVideo} onClose={closeVideoModal} />
      )}
    </div>
  )
}

export default App
