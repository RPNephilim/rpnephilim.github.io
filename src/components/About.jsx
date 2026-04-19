import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I'm a passionate software developer specializing in <strong>backend development</strong>. 
            I design and build robust, scalable server-side applications and APIs that power modern 
            web and mobile experiences.
          </p>
          <p>
            While my primary focus is on backend technologies, I also have experience with{' '}
            <strong>frontend development using React</strong>, allowing me to understand the full 
            stack and build comprehensive solutions.
          </p>
          <p>
            I'm constantly learning and exploring new technologies to deliver efficient, maintainable 
            code that solves real-world problems.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
