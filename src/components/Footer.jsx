import { Nav, Image } from 'react-bootstrap';
import '../css/Footer.css';

function FooterNav() {
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="profile">
          <Image src={`${process.env.PUBLIC_URL}/img/nav-pic.png`} roundedCircle className="nav-profile-pic" />
          <h2>James Keyser</h2>
          <h4>Full Stack Software Engineer</h4>
          <div className="social-links">
            <a className="p-2" href="https://www.linkedin.com/in/jamesreedkeyser" target="_blank" rel="noopener noreferrer">
              <img src="img/linkedin.png" alt="LinkedIn icon" width="22px" />
            </a>
            <a className="p-2" href="https://www.github.com/Keyser422" target="_blank" rel="noopener noreferrer">
              <img src="img/github.png" alt="GitHub icon" width="22px" />
            </a>
            <a className="p-2" href="mailto:jamesrkeyser22@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="img/email.png" alt="Email icon" width="22px" />
            </a>
          </div>
        </div>
        <div className="ownership">
          <p>Created, designed, and code by me James Keyser</p>
        </div>
        <div className="links">
          <Nav className="flex-row">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Resumé</Nav.Link>
            <Nav.Link href="#skills">Experience</Nav.Link>
            <Nav.Link href="#experience">Skills</Nav.Link>
            <Nav.Link href="James-Keyser's-Resume">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </div>
      </div>
    </footer>
  );
}

export default FooterNav;
