import { FaGithub, FaVideo, FaPlay } from 'react-icons/fa'
import './Projects.css'

const Projects = ({ openVideoModal }) => {
  const projects = [
    {
      id: 'project1',
      title: 'E-Commerce API',
      description: 'A RESTful API for an e-commerce platform with microservices architecture, built with Node.js and MongoDB.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      thumbnail: 'assets/images/project1-thumb.jpg',
      video: 'assets/videos/project1-demo.mp4',
      github: 'https://github.com/yourusername/project1'
    },
    {
      id: 'project2',
      title: 'Task Management Dashboard',
      description: 'A full-stack task management application with React frontend and Python Flask backend with real-time updates.',
      tags: ['React', 'Flask', 'PostgreSQL', 'WebSocket'],
      thumbnail: 'assets/images/project2-thumb.jpg',
      video: 'assets/videos/project2-demo.mp4',
      github: 'https://github.com/yourusername/project2'
    },
    {
      id: 'project3',
      title: 'Authentication Service',
      description: 'Secure authentication and authorization service with JWT tokens, OAuth2, and role-based access control.',
      tags: ['Java', 'Spring Boot', 'Redis', 'JWT'],
      thumbnail: 'assets/images/project3-thumb.jpg',
      video: 'assets/videos/project3-demo.mp4',
      github: 'https://github.com/yourusername/project3'
    },
    {
      id: 'project4',
      title: 'React Portfolio Builder',
      description: 'A React-based web application that allows users to create and customize their professional portfolios with drag-and-drop interface.',
      tags: ['React', 'Redux', 'Styled Components', 'Firebase'],
      thumbnail: 'assets/images/project4-thumb.jpg',
      video: 'assets/videos/project4-demo.mp4',
      github: 'https://github.com/yourusername/project4'
    }
  ]

  const handleVideoClick = (videoSrc) => {
    openVideoModal(videoSrc)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-thumbnail">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-overlay">
                  <button
                    className="video-btn"
                    onClick={() => handleVideoClick(project.video)}
                  >
                    <FaPlay /> Watch Demo
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <FaGithub /> View Code
                  </a>
                  <button
                    className="btn-link btn-demo"
                    onClick={() => handleVideoClick(project.video)}
                  >
                    <FaVideo /> Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
