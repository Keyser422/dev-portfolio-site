import React from 'react';
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
    <div className="container skills-container">
      <h2>Skills</h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-6 col-md-3 text-center">
            <img src={skill.src} alt={skill.alt} className="img-fluid skills-table" />
          </div>
        ))}
      </div>
    </div>
  );
}
