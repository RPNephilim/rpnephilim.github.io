import { FaEnvelope, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
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
            <a href="mailto:rajpriyadarshi3924@gmail.com" className="contact-item">
              <FaEnvelope />
              <span>rajpriyadarshi3924@gmail.com</span>
            </a>
            <a href="https://github.com/rpnephilim" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaGithub />
              <span>github.com/rpnephilim</span>
            </a>
            <a href="https://linkedin.com/in/raj-priyadarshi-of2023" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FaLinkedin />
              <span>linkedin.com/in/raj-priyadarshi-of2023</span>
            </a>
            <a href="/assets/resume.pdf" download className="contact-item">
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
