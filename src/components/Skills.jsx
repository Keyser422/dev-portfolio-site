import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerPage = 3;

  const nextSkills = () => {
    setCurrentIndex((prevIndex) => (prevIndex + skillsPerPage) % skills.length);
  };

  const prevSkills = () => {
    setCurrentIndex((prevIndex) => (prevIndex - skillsPerPage + skills.length) % skills.length);
  };

  const displayedSkills = skills.slice(currentIndex, currentIndex + skillsPerPage).concat(
    skills.slice(0, Math.max(0, currentIndex + skillsPerPage - skills.length))
  );

  return (
    <div className="skills-page" id='skills'>
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>
        <div className="row justify-content-center">
          {displayedSkills.map((skill, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 text-center mb-4">
              <Card className="skill-card">
                <Card.Img variant="top" src={skill.src} alt={skill.alt} className="skill-image" />
                <Card.Body>
                  <Card.Title className="cards-title">{skill.alt}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={prevSkills} className="btn btn-custom">Previous</button>
          <button onClick={nextSkills} className="btn btn-custom">Next</button>
        </div>
        <div className="back-to-top">
          <a href="#top" className="btn btn-custom">Back to Top</a>
        </div>
      </div>
    </div>
  );
}
