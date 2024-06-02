import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import '../css/Experience.css';

export default function Projects() {
  return (
<div className="projects-page">
    <h1 className="page-header">Past Projects</h1>
    <div className="container projects-container">
    <div className="row justify-content-center">
        <div className="col-12 col-md-4 text-center">
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
                <ListGroup.Item className="list-group-technoligies ">Backend: Python, FastAPI, PostgreSQL</ListGroup.Item>
                <ListGroup.Item className="list-group-technoligies ">Frontend: Javascript, React</ListGroup.Item>
                <ListGroup.Item className="list-group-technoligies ">Libraries: Bootstrap.css, GoogleAPI, Email.js</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://www.github.com/Keyser422" target="_blank" rel="noopener noreferrer">
                    <img src="img/github.png" alt="linkedin icon" width="40px" />
                </Card.Link>
            </Card.Body>
        </Card>
        </div>
        <div className="col-12 col-md-4 text-center">
        <Card className="project-card project-card-carcar">
                <Card.Img variant="top" src="/img/car-car.png" alt="Car Car" className="cc-project-image" />
            <Card.Body>
                <Card.Title className="cards-title">Car Car</Card.Title>
                <Card.Text className="cards-text">
                    Web application that manages inventory, sale, employees and appointments of an automobile dealership.
                </Card.Text>
            </Card.Body>
            <ListGroup>
                <ListGroup.Item className="list-group-tech-stack">Tech Stack</ListGroup.Item>
                <ListGroup.Item className="list-group-technoligies ">Backend: Python, Django</ListGroup.Item>
                <ListGroup.Item className="list-group-technoligies ">Frontend: Javascript, React</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                < Card.Link href="https://www.github.com/Keyser422" target="_blank" rel="noopener noreferrer">
                    <img src="img/github.png" alt="linkedin icon" width="40px" />
                </Card.Link>
            </Card.Body>
        </Card>
            </div>
            <div className="col-12 col-md-4 text-center">
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
                <ListGroup.Item className="list-group-technoligies ">Frontend: Javascript, React</ListGroup.Item>
                <ListGroup.Item className="list-group-technoligies ">Libraries: Bootstrap.css, React-Bootstrap, Email.js</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://www.github.com/Keyser422" target="_blank" rel="noopener noreferrer">
                    <img src="img/github.png" alt="linkedin icon" width="40px" />
                </Card.Link>
            </Card.Body>
        </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
