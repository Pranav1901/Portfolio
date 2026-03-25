import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'JavaScript']
    },
    {
      category: 'Backend',
      skills: ['Spring Boot', 'REST', 'SOAP', 'Microservices']
    },
    {
      category: 'Testing',
      skills: ['JUnit', 'Mockito', 'Cypress', 'Playwright', 'TDD']
    }
  ]

  const skillCategories2 = [
    {
      category: 'Databases & Messaging',
      skills: ['Oracle DB', 'IBM DB2', 'PostgreSQL', 'Kafka']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Kubernetes', 'CI/CD', 'Splunk']
    },
    {
      category: 'AI & Tools',
      skills: ['LangChain', 'CrewAI', 'Streamlit', 'Hibernate']
    }
  ]

  const certifications = [
    {
      id: 1,
      code: 'AWS',
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      verified: true,
      link: 'https://drive.google.com/file/d/16f2GAE3FEntpU5oV5hzCaZXhBf_Rvh9Q/view?usp=sharing'
    },
    {
      id: 2,
      code: 'AI',
      name: 'Multi Agent AI Systems with crewAI',
      issuer: 'DeepLearning.AI',
      verified: true,
      link: 'https://drive.google.com/file/d/1F6odHML0E06Vn-nYba9NoDLy-KerfjOw/view?usp=sharing'

    }
  ]

  return (
    <div className="sk-wrap">
      <h2 className="sk-heading">Tech I work with.</h2>
      <div className="sk-grid">
        <div>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="sk-group">
              <div className="sk-cat">{cat.category}</div>
              <div className="sk-tags">
                {cat.skills.map((skill, sidx) => (
                  <span key={sidx} className="sk-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div>
          {skillCategories2.map((cat, idx) => (
            <div key={idx} className="sk-group">
              <div className="sk-cat">{cat.category}</div>
              <div className="sk-tags">
                {cat.skills.map((skill, sidx) => (
                  <span key={sidx} className="sk-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sk-divider"></div>
      <div className="sk-cert-label">Certifications</div>
      <div className="cert-row">
        {certifications.map((cert) => (
          <div key={cert.id} className="cert-card">
            <div className="cert-mono">{cert.code}</div>
            <div>
              <a className="cert-name" href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.name}
              </a>
              <div className="cert-issuer">{cert.issuer}</div>
              {cert.verified && <div className="cert-check">✓ Verified</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
