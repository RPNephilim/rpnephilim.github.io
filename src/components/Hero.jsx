import { FaGithub, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="highlight">Raj Priyadarshi</span></h1>
          <h2>Software Engineer</h2>
          <p>Specializing in <span className="highlight">distributed systems</span> and <span className="highlight">cloud-native architecture</span>. I build robust backends with <span className="highlight">Java & AWS</span> and bridge the gap to the user with <span className="highlight">React</span>.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/rpnephilim" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/raj-priyadarshi-of2023" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/images/profile-pic.png" alt="Raj Priyadarshi" width="100%"/>
        </div>
      </div>
    </section>
  )
}

export default Hero
