import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Aboutcard from "./AboutCard";
import home from "../../assets/home.png";
import "./About.css";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={home} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="oraange">About</strong>&nbsp; Me
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="oraange">&nbsp;Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="oraange">Tools</strong>&nbsp;I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
