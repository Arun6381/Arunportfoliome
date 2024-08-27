import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="oraange">Arun Kumar </span>
            from <span className="oraange"> Coimbatore, India.</span>
            <br />
            Build a real-world project using{" "}
            <span className="oraange">
              React, Node.js, Express, MongoDB, Firebase, and GraphQL.
            </span>
            This showcases my full stack skills and problem-solving abilities,
            making my project more impactful.
            <br />I have completed BSc in{" "}
            <span className="oraange">Computer Science</span> at{" "}
            <span className="oraange">NGMC Coimbatore.</span>
            <br />
            Apart from coding, some other activities that, I like to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: " #caa11a" }}>
            " Experience is the name everyone gives to their mistakes. "
          </p>
          <footer className="blockquote-footer"> Oscar Wilde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
