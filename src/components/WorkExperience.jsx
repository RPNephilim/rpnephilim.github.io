import { useState } from 'react'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './WorkExperience.css'

const WorkExperience = () => {
  const [expandedProjects, setExpandedProjects] = useState({})

  const experiences = [
    {
      id: 1,
      company: 'Capgemini Technology Services India Limited',
      location: 'Pune, Maharashtra',
      positions: [
        {
          title: 'Associate Consultant',
          duration: 'Oct 2024 - Present',
        },
        {
          title: 'Senior Analyst',
          duration: 'July 2023 - Aug 2024',
        }
      ],
      technologies: [
        'Java', 'Spring Boot', 'Python', 'AWS Lambda', 'AWS Batch', 'Jenkins', 
        'Docker', 'Liquibase', 'Redis'
      ],
      projects: [
        {
          id: 1,
          name: 'E-Commerce Microservices Platform',
          technologies: ['Java', 'Spring Boot', 'AWS', 'Jenkins', 'PostgreSQL'],
          achievements: [
            'Built RESTful APIs serving 500K+ requests/day',
            'Implemented CI/CD pipeline using Jenkins',
            'Deployed and managed services on AWS',
            'Reduced deployment time by 60%'
          ]
        },
        {
          id: 2,
          name: 'Data Processing & Analytics System',
          technologies: ['Python', 'AWS Lambda', 'S3', 'DynamoDB'],
          achievements: [
            'Processed 10M+ records daily',
            'Built serverless functions using AWS Lambda',
            'Optimized data processing speed by 45%'
          ]
        },
        {
          id: 3,
          name: 'API Gateway & Service Orchestration',
          technologies: ['Spring Boot', 'Docker', 'Kubernetes', 'Redis'],
          achievements: [
            'Integrated 15+ microservices',
            'Containerized applications using Docker',
            'Achieved 99.9% uptime'
          ]
        }
      ]
    }
  ]

  const toggleProject = (companyId, projectId) => {
    const key = `${companyId}-${projectId}`
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <section id="experience" className="work-experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="company-name">
                    <FaBriefcase /> {exp.company}
                  </h3>
                  <div className="positions-list">
                    {exp.positions.map((position, idx) => (
                      <div key={idx} className="position-row">
                        <h4 className="position-title">{position.title}</h4>
                        <span className="position-duration">
                          <FaCalendar /> {position.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="location-info">
                    <FaMapMarkerAlt /> {exp.location}
                  </div>
                </div>

                <div className="tech-summary">
                  <h5>Technologies Used</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="projects-section">
                  <h5>Key Projects ({exp.projects.length})</h5>
                  {exp.projects.map((project) => {
                    const isExpanded = expandedProjects[`${exp.id}-${project.id}`]
                    return (
                      <div key={project.id} className="project-card">
                        <div 
                          className="project-header"
                          onClick={() => toggleProject(exp.id, project.id)}
                        >
                          <div className="project-title-area">
                            <h6>{project.name}</h6>
                            <div className="project-tech-inline">
                              {project.technologies.slice(0, 3).map((tech, idx) => (
                                <span key={idx} className="tech-mini">{tech}</span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="tech-more">+{project.technologies.length - 3}</span>
                              )}
                            </div>
                          </div>
                          <button className="project-expand-btn" aria-label="Toggle project details">
                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                        
                        {isExpanded && (
                          <div className="project-details">
                            <ul className="achievements-list">
                              {project.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
