import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision.
          </p>
          <div className="contact-info">
            <a href="mailto:your.email@example.com" className="contact-item">
              <FaEnvelope />
              <span>your.email@example.com</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaGithub />
              <span>github.com/yourusername</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaLinkedin />
              <span>linkedin.com/in/yourusername</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
