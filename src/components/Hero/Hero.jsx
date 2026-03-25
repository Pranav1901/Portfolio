import './Hero.css'
import pranavImage from '../../assets/PranavRodge.jpeg'

const Hero = () => {
  return (
    <div className="hero-wrap">
      <div className="hero-grid"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-top">
          <div className="hero-left">
            <h1 className="hero-name">
              Pranav<br />
              <span>Rodge</span>
            </h1>
            <div className="hero-sub">
              <span>Software Engineer</span>
              <span className="dot"></span>
              <span>Java · Microservices</span>
              <span className="dot"></span>
              <span>AI Systems</span>
              <span className="hero-cursor"></span>
            </div>
            <div className="hero-status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
          </div>
          <img src={pranavImage} alt="Pranav Rodge" className="hero-avatar" />
        </div>
        <div className="hero-bottom">
          <div className="hero-btns">
            <a 
              href="https://medium.com/@rodgepranav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-solid"
            >
              My Blogs
            </a>
            <a href="mailto:rodgepranav@gmail.com" className="btn-outline">
              Contact Me
            </a>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="hero-links">
              <a
                className="hero-link"
                href="https://github.com/Pranav1901"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="hero-link"
                href="https://www.linkedin.com/in/pranav-rodge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="hero-link"
                href="https://drive.google.com/file/d/1jsuiXNl_F3WF2gpf_EcydFq1vTSZz3qJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero