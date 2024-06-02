import Card from 'react-bootstrap/Card';
import SideNav from './SideNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Skills.css';

const skills = [
  { src: 'img/javascript.png', alt: 'JavaScript' },
  { src: 'img/react.png', alt: 'React' },
  { src: 'img/python.png', alt: 'Python' },
  { src: 'img/django.png', alt: 'Django' },
  { src: 'img/fastapi.png', alt: 'FastAPI' },
  { src: 'img/html.png', alt: 'HTML' },
  { src: 'img/css.png', alt: 'CSS' },
  { src: 'img/postgresql.png', alt: 'PostgreSQL' },
  { src: 'img/sql.png', alt: 'SQL' },
  { src: 'img/mongodb.png', alt: 'MongoDB' },
  { src: 'img/git.png', alt: 'Git' },
  { src: 'img/cicd.png', alt: 'CI/CD' },
  { src: 'img/aws.png', alt: 'AWS' }
];

export default function Skills() {
  return (
    <div className="skills-page">
      <SideNav />
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <Card className="skill-card">
                <Card.Img variant="top" src={skill.src} alt={skill.alt} className="skill-image" />
                <Card.Body>
                  <Card.Title className="cards-title">{skill.alt}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
