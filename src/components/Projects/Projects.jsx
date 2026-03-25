import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Code Review Automation',
      description: 'AI-powered code review system using LangChain & Groq. Reduced manual review effort by up to 70% with real-time feedback via FastAPI.',
      tags: ['Python', 'LangChain', 'Groq', 'FastAPI'],
      featured: true,
      link: 'https://codereviewautomation.streamlit.app/'
    },
    {
      id: 2,
      number: '02',
      title: 'Equipment Management & Billing System',
      description: 'Full-stack backend for multi-owner heavy equipment business. Handles onboarding, task allocation, billing workflows and invoice generation.',
      tags: ['Java', 'Spring Boot', 'PostgreSQL'],
      featured: false,
      link: '#'
    }
  ]

  return (
    <div className="proj-wrap">
      <h2 className="proj-heading">Things I've built.</h2>
      <div className="proj-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`proj-card ${project.featured ? 'proj-highlight' : ''}`}
          >
            <div className="proj-card-top">
              <div className="proj-num">{project.number}</div>
              <div className="proj-title">{project.title}</div>
              <div className="proj-desc">{project.description}</div>
            </div>
            <div className="proj-card-bottom">
              <div className="proj-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="proj-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <a className="proj-link" href={project.link}>
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
