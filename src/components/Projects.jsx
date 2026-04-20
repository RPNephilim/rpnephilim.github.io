import { FaGithub, FaVideo, FaPlay } from 'react-icons/fa'
import './Projects.css'

const Projects = ({ openVideoModal }) => {
  const projects = [
    {
      id: 'project1',
      title: 'YT-Trimmer',
      description: 'A python GUI application that allows users to trim YouTube videos by specifying start and end times, and then downloads the trimmed video locally.',
      tags: ['Python', 'Tkinter', 'yt-dlp'],
      thumbnail: 'assets/images/yt-trimmer-pic.png',
      video: 'assets/videos/yt-trimmer-demo.mp4',
      github: 'https://github.com/RPNephilim/yt-trimmer'
    },
    {
      id: 'project2',
      title: 'Remoted',
      description: 'A remote desktop application that enables users to access and control their computers from anywhere. It provides multiple access modes like browse, full-control and screen-share, and supports cross-platform connectivity.',
      tags: ['Electron JS', 'React', 'TypeScript', 'Java', 'Spring Boot', 'WebRTC'],
      thumbnail: 'assets/images/remoted-pic.png',
      video: 'assets/videos/remoted-demo.mp4',
      github: 'https://github.com/RPNephilim/remoted-v2'
    },
    {
      id: 'project3',
      title: 'Impel Down Prison Management System',
      description: 'Simulated a prison management system for the fictional Impel Down prison from One Piece, allowing users to manage inmate records, cell assignments, and security protocols through a Java-based application with a Spring Boot backend.',
      tags: ['Java', 'Spring Boot', 'MySQL'],
      thumbnail: 'assets/images/imps-pic.png',
      video: 'assets/videos/imps-demo.mp4',
      github: 'https://github.com/RPNephilim/ImpelDownPrisonSystem'
    },
    {
      id: 'project4',
      title: 'React Portfolio Using AI',
      description: 'A React-based portfolio website build using AI tools to generate content and design elements, showcasing projects and skills.',
      tags: ['React', 'Claude AI'],
      thumbnail: 'assets/images/portfolio-pic.png',
      video: 'assets/videos/portfolio-demo.mp4',
      github: 'https://github.com/RPNephilim/rpnephilim.github.io'
    },
    {
      id: 'project5',
      title: 'MazeEscape Game',
      description: 'A mobile 3D maze escape game developed in Unity, where players navigate through complex mazes by marking visited paths, with the goal of finding the exit.',
      tags: ['Unity', 'C#'],
      thumbnail: 'assets/images/mazeescape-pic.jpeg',
      video: 'assets/videos/mazeescape-demo.mp4',
      github: 'https://github.com/RPNephilim/MazeEscape'
    }
  ]

  const handleVideoClick = (videoSrc, projectId) => {
    if (projectId === 'project4') {
      window.location.href = '#home'
    } else {
      openVideoModal(videoSrc)
    }
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
                    onClick={() => handleVideoClick(project.video, project.id)}
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
                    onClick={() => handleVideoClick(project.video, project.id)}
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
