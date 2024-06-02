import Card from 'react-bootstrap/Card';
import '../css/Hero.css';

const Hero = () => {
  return (
    <div className="intro">
      <div className="content">
        <div className="text-content">
          <div className="intro-header">
            James Keyser
            <br />
            Full-Stack Software Developer
          </div>
          <Card className="text-card">
            <Card.Body>
              <Card.Title>As a Software Engineer,</Card.Title>
              <Card.Text>
                "I'm passionate about solving complex problems that lead to efficient software solutions that drive progress.
                My love of learning serves me well in an always evolving technological world"
              </Card.Text>
              <Card.Link href="https://www.linkedin.com/in/jamesreedkeyser" target="_blank" rel="noopener noreferrer">
              <img src="img/linkedin.png" alt="linkedin icon" width="30px" />
              </Card.Link>
              <Card.Link href="https://www.github.com/Keyser422" target="_blank" rel="noopener noreferrer">
              <img src="img/github.png" alt="linkedin icon" width="28px" />
              </Card.Link>
              <Card.Link href="mailto:jamesrkeyser22@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="img/email.png" alt="linkedin icon" width="32px" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="image-content">
          <img src={`${process.env.PUBLIC_URL}/img/Portfolio-pic.png`} alt="Profile" className="portfolio-pic" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
