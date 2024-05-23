import { Link } from 'react-router-dom';
import '../css/Nav.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">James Keyser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="../James-Keyser's-Resume.pdf" target="_blank">Resume</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-me">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
