import { FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
          <h2>Backend Software Developer</h2>
          <p>Building scalable systems and elegant solutions</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <FaUser />
            <p>Your Photo Here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
