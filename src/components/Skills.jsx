import { FaServer, FaDesktop, FaTools } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaServer />,
      title: 'Backend',
      skills: ['Python', 'Java', 'Node.js', 'Go', 'REST APIs', 'GraphQL', 'Microservices', 'SQL', 'NoSQL']
    },
    {
      icon: <FaDesktop />,
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Redux']
    },
    {
      icon: <FaTools />,
      title: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>
                {category.icon} {category.title}
              </h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
