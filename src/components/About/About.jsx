import './About.css'
import aboutImage from '../../assets/PranavRodgeAboutSection.jpeg'

const About = () => {
  return (
    <div className="about-wrap">
      <div className="about-inner">
        <img src={aboutImage} alt="Pranav Rodge" className="about-img" />
        <div>
          <h2 className="about-heading">
            Always learning,<br />
            always exploring.
          </h2>
          <p className="about-bio">
            My journey started at VIIT Pune, where I completed my B.Tech in Information Technology with a 9.46 CGPA. College wasn't just about academics—it's where I discovered my passion for building robust systems and solving complex problems. After graduating, I made the leap to Hyderabad, where I joined JP Morgan Chase as a Software Engineer, diving deep into Java microservices, distributed systems, and backend architecture.
          </p>
          <p className="about-bio">
            Beyond code, I'm a passionate foodie who loves exploring new cuisines and hidden gems in the city. Travel is my constant companion—I'm obsessed with exploring new places, trying local flavors, and meeting people from different walks of life. I'm also someone who can't sit still creatively. I dabble in writing, reading, playing instruments, and photography. Each of these feeds my curiosity in different ways.
          </p>
          <p className="about-bio" style={{ marginBottom: 0 }}>
            I've been fascinated by blockchain technology since my college days, drawn to its core philosophy that we don't need authority or intermediaries. Whether it's exploring Web3 concepts, decentralized systems, or pushing the boundaries of what's possible, I'm always eager to learn and experiment with new tools.
          </p>
          <div className="about-divider"></div>
          <a href="https://www.instagram.com/nature_through_frames?igsh=MW1xb3VxeDBnMXBpYw==" target="_blank" rel="noopener noreferrer" className="photography-card">
            <div className="photography-card-content">
              <h3 className="photography-card-title">📸 My Photography</h3>
              <p className="photography-card-text">Explore my collection of nature and travel photography</p>
            </div>
            <span className="photography-card-cta">Visit on Instagram →</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About