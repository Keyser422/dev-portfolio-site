import React from 'react';
import { Nav, Image } from 'react-bootstrap';
import '../css/SideNav.css';

function SideNav() {
  return (
    <div className="navbar">
      <div className="profile">
        <Image src={`${process.env.PUBLIC_URL}/img/nav-pic.png`} roundedCircle className="profile-pic" />
        <h2>James Keyser</h2>
        <h4>Full Stack Software Engineer</h4>
      </div>
      <div className="links">
        <Nav className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="James-Keyser's-Resume">Resumé</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}
export default SideNav;
