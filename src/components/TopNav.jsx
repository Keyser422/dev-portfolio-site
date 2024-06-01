import { Nav, Navbar } from 'react-bootstrap';
import '../css/TopNav.css';

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="nav-links">
        <Nav className="mr-auto">
          <Nav.Link href="#home">James Keyser</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default TopNav;
