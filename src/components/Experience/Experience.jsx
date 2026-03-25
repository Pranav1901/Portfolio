import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      dateStart: 'Aug 2023',
      dateEnd: 'Present',
      company: 'JP Morgan Chase',
      role: 'Associate · Software Engineer II',
      active: true,
      description: [
        'Decomposed a legacy mainframe SOR (15M accounts) into domain-aligned microservices',
        'Reduced Apache Kafka payload size by 81% via Avro POC',
        'Built reconciliation screen adopted as standard across all LOB migrations',
        'Contributed to $1.5M projected annual cost savings through mainframe decommissioning'
      ],
      tags: ['Java', 'Spring Boot', 'Kafka', 'Oracle DB', 'COBOL migration']
    },
    {
      id: 2,
      dateStart: 'Aug 2022',
      dateEnd: 'Dec 2022',
      company: 'NielsenIQ',
      role: 'Software Development Intern',
      active: false,
      description: [
        'Raised Angular app test coverage from 65% to 95%',
        'Built and tested interactive web components using Jasmine, Karma & AngularJS'
      ],
      tags: ['Angular', 'JavaScript', 'Jasmine', 'Karma']
    }
  ]

  return (
    <div className="exp-wrap">
      <h2 className="exp-heading">Where I've worked.</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="tl-item">
            <div className="tl-date">
              {exp.dateStart}
              <br />
              {exp.dateEnd}
            </div>
            <div className="tl-line">
              <div className={`tl-dot ${exp.active ? 'active' : ''}`}></div>
            </div>
            <div className="tl-content">
              <div className="tl-company">{exp.company}</div>
              <div className="tl-role">{exp.role}</div>
              <ul className="tl-desc">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="tl-tags">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="tl-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
