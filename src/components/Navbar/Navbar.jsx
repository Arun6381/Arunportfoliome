import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import { AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { CgFileDocument } from "react-icons/cg";
import Typewriter from "typewriter-effect";

import "./Navbar.css";
import pdf from "../../assets/Arun Resume.pdf";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <BootstrapNavbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <BootstrapNavbar.Brand href="/" className="d-flex">
          <Typewriter
            options={{
              strings: ["Arun Kumar"],
              autoStart: true,
              loop: false,
              deleteSpeed: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Arun")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("AK")
                .pauseFor(1000)

                .start();
            }}
          />
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={pdf} target="_blank">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://blog-use-context-faker.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://github.com/Arun6381"
                target="_blank"
                rel="noreferrer"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="mailto:arunkumargobi12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BiSolidContact style={{ marginBottom: "2px" }} /> Contact Me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default NavBar;
