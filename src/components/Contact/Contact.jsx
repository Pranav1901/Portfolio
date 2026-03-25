import './Contact.css'

const Contact = () => {
  return (
    <div className="ct-wrap">
      <div className="ct-noise"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="ct-heading">
          Let's build<br />
          something <span>great.</span>
        </h2>
        <div className="ct-sub">
          Always open to interesting ideas, good people, and meaningful work.
        </div>
        <div>
          <a href="mailto:rodgepranav@gmail.com" className="ct-email">
            rodgepranav@gmail.com
          </a>
        </div>
        <div className="ct-links">
          <a className="ct-link" href="https://github.com/Pranav1901">
            <div className="ct-link-icon">GH</div>
            <span>GitHub</span>
          </a>
          <a className="ct-link" href="https://www.linkedin.com/in/pranav-rodge/">
            <div className="ct-link-icon">LI</div>
            <span>LinkedIn</span>
          </a>
          <a className="ct-link" href="https://drive.google.com/file/d/1jsuiXNl_F3WF2gpf_EcydFq1vTSZz3qJ/view?usp=sharing">
            <div className="ct-link-icon">CV</div>
            <span>Resume</span>
          </a>
        </div>
        <div className="ct-divider"></div>
        <div className="ct-footer-row">
          <div className="ct-copy">© 2025 Pranav Rodge</div>
          <div className="ct-made">Designed & built by Pranav Rodge</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
