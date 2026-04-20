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
          name: 'Secure Tokenization Platform (PCI)',
          technologies: ['Java', 'AWS Lambda', 'PCI Compliance', 'Tokenization'],
          achievements: [
            'Implmented and enhanced toknization API capabilities (including JSON-based tokenization endpoints and multi-account tokenization support) to enable secure handling of payment account data',
            'Added credit-card tokenization support and improved validator integration + error handling + unit tests for production readiness',
            'Hardened tokenization integrations by improving certificate handling (fetch cert from S3) and standardizing error mapping for downstream consumers'
          ]
        },
        {
          id: 2,
          name: 'Payments File Processing Pipeline',
          technologies: ['Batch Processing', 'AWS Lambda', 'Mastercard RPPS', 'S3'],
          achievements: [
            'Created AWS lambda to read and process payments data files from S3, transforming them into standardized formats for downstream processing',
            'Delivered operational enhancements for RPPS payment alerting and improved reliablity of file-based payment workflows',
            'Resolved a critical production issue by replicating it locally and implementing a fix for it'
          ]
        },
        {
          id: 3,
          name: 'Integration Reliability & Observability',
          technologies: ['Python', 'Splunk', 'Opsgenie', 'Monitoring/Alerts'],
          achievements: [
            'Built and maintained Splunk dashboard and alerts across non-prod and prod to improve visibility for critical integration flows',
            'Implemented alert hygiene/cleanup to reduce noise and speed up incident response (clear ownership, actionable threasholds)',
            'Developed and supported production operations and integration hardening for systems like Spinwheel & Experian'
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
