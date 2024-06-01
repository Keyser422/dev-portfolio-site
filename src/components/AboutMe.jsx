import Card from 'react-bootstrap/Card';
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="text-content">
        <Card className="text-card">
          <Card.Body>
            <Card.Title>Software Engineer</Card.Title>
            <Card.Text>
              "I aim to develop innovative, efficient software solutions that drive progress and enhance user experiences,
              while continuously improving my skills to stay on top of tech advances."
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="image-content">
        <img src={`${process.env.PUBLIC_URL}/img/Portfolio-pic.png`} alt="Profile" className="portfolio-pic" />
      </div>
    </div>
  );
}

export default AboutMe;
