import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// import { RiSignalWifiErrorFill } from "react-icons/ri";
import pdf from "./../../assets/Arun Resume.pdf";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <ul className="footer-icons">
          <li className="social-icons">
            <a
              href="https://github.com/Arun6381"
              style={{ color: "#caa11a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="http://wa.me/6381930081"
              style={{ color: "#caa11a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/arun-kumar-v-686917228/"
              style={{ color: "#caa11a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/iam__a_r_u_n?igsh=MWVybWc1YmszeXVpeg=="
              style={{ color: "#caa11a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
          </li>
          <li className="social-icons">
            <a
              href={pdf}
              style={{ color: "#caa11a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrDocumentPdf />
            </a>
          </li>
          {/* <li className="social-icons">
            <a
              href="/NotFound"
              style={{ color: "#caa11a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiSignalWifiErrorFill />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
