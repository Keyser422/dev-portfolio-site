import { Nav } from 'react-bootstrap';
import '../css/TopNav.css';

const TopNav = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="top-nav">
      <div className="nav-links">
        <Nav className="mr-auto">
          <Nav.Link href="/home" onClick={(e) => handleScroll(e, 'home')}>James Keyser</Nav.Link>
          <Nav.Link href="/Resume">Resumé</Nav.Link>
          <Nav.Link href="/experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default TopNav;
