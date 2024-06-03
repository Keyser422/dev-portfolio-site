import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/AboutMe.css';

export default function AboutMe() {
  return (
    <div className="about-me-section">
      <div className="about-me-background">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
               I'm James Keyser, a U.S Veteran and Full Stack Software Engineer
               with a passion for complex problem solving and tech. I recently graduated from Hack
               Reactor's 19 week immersive software engineering coding bootcamp. With over 700 hours of coding
               practice. Cementing my skills in Python, Javascript, Django and React, While adding to my experience
               in various other programming languages such as, C#, and Java,
               and other B.E and DevOp tools including PostgreSQL, MongoDB, Git, and AWS. I love and thrive on
               tackling challenging new projects and continuously expanding my knowledge.
              <br /><br />
              During my tenure in the U.S. Air Force, I developed a robust set of soft skills
              that are invaluable in any professional field. My strong work ethic aided me in this disciplined
              environmentand and instilled the ability to remain calm and focused under pressure.
              Leadership and teamwork were paramount, as I often collaborated with diverse teams to
              achieve common goals. This honed my communication skills, enabling me to convey complex
              information clearly and effectively. Additionally, the adaptability and problem-solving skills
              I cultivated allow me to navigate and thrive in dynamic and challenging situations.
              These competencies, paired with a commitment to excellence and continuous learning,
              make me a versatile and reliable asset in any industry.
              <br /><br />
              In addition to my professional pursuits, my love of learning fuels my enjoyment of tinkering
              with tech in all it's facets. Whether it be as simple as building a custom P.C or automating
              daily task around my home. While not immersed in tech you'll find me enjoying time with my family, or watching a
              baseball game. Go Red Sox!
            </p>
          </div>
          <div className="about-me-image">
            <img src={`${process.env.PUBLIC_URL}/img/portfoliopic.png`} alt="James Keyser" className="profile-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
