import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home.png";
import Changer from "./Changer.jsx";
import "./Home.css";

import Aboutcard from "./../About/AboutCard.jsx";
// import Project from "./../Projects/Projects.jsx";

export default function Home() {
  return (
    <>
      <section>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 10 }} className="heading">
                  Hi
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                  ,
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Arun Kumar ,</strong>
                </h1>

                <div style={{ padding: 40, textAlign: "left" }}>
                  <Changer />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 0 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluids"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Project /> */}
    </>
  );
}
