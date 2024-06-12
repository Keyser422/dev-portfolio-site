import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/Experience.css';

export default function Projects() {
  return (
    <div className="projects-page" id='experience'>
      <h1 className="page-header">My Projects</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
          <Card className="project-card project-card-pawsitive">
            <Card.Img variant="top" src="/img/pawsitive-vibes.png" alt="Pawsitive Vibes" className="pv-project-image" />
            <Card.Body>
              <Card.Title className="cards-title">Pawsitive Vibes</Card.Title>
              <Card.Text className="cards-text">
                Web Application to handle business operations for Pawsitive Vibes.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item className="list-group-tech-stack">Tech Stack</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Backend: Python, FastAPI, PostgreSQL || Frontend: Javascript, React</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Libraries: Bootstrap.css, GoogleAPI, Email.js</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://github.com/Keyser422/Pawsitive-Vibes" target="_blank" rel="noopener noreferrer">
                <img src="img/github.png" alt="GitHub icon" width="40px" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
          <Card className="project-card project-card-carcar">
            <Card.Img variant="top" src="/img/car-car.png" alt="Car Car" className="cc-project-image" />
            <Card.Body>
              <Card.Title className="cards-title">Car Car</Card.Title>
              <Card.Text className="cards-text">
                Web application that manages inventory, sales, employees, and appointments of an automobile dealership.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item className="list-group-tech-stack">Tech Stack</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Backend: Python, Django</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Frontend: Javascript, React</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://github.com/Keyser422/Car-Car" target="_blank" rel="noopener noreferrer">
                <img src="img/github.png" alt="GitHub icon" width="40px" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
          <Card className="project-card project-card-portfolio">
            <Card.Img variant="top" src="/img/portfolio-site.png" alt="My Portfolio Website" className="pw-project-image" />
            <Card.Body>
              <Card.Title className="cards-title">My Portfolio Website</Card.Title>
              <Card.Text className="cards-text">
                My Personal Software Engineering Portfolio Website.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item className="list-group-tech-stack">Tech Stack</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Frontend: Javascript, React</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Libraries: Bootstrap.css, React-Bootstrap, Email.js</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://github.com/Keyser422/dev-portfolio-site" target="_blank" rel="noopener noreferrer">
                <img src="img/github.png" alt="GitHub icon" width="40px" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-4 text-center mb-4">
          <Card className="project-card project-card-blackout">
            <Card.Img variant="top" src="/img/Blackout_Arms_Logo.png" alt="BlackOut Arms LLC" className="bo-project-image" />
            <Card.Body>
              <Card.Title className="cards-title">Point of Sale Web Application for BlackOut Arms LLC.</Card.Title>
              <Card.Text className="cards-text">
                Currently under development.
              </Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item className="list-group-tech-stack">Tech Stack</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Backend: Python, FastAPI, PostgreSQL</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Frontend: Javascript, React, React-Native</ListGroup.Item>
              <ListGroup.Item className="list-group-technologies">Libraries: Bootstrap.css, Email.js, TBD</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.github.com/Keyser422" target="_blank" rel="noopener noreferrer">
                <img src="img/github.png" alt="GitHub icon" width="40px" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
