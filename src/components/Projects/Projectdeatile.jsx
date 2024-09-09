import { useLocation } from "react-router-dom";
import "./Projectdeatile.css"; // Assuming you have the CSS for the details page
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap CSS is imported

export default function Projectdeatile() {
  const location = useLocation();
  const { work } = location.state || {}; // Retrieve the project details passed in state

  if (!work) {
    return <div>No project details available</div>;
  }

  return (
    <div className="project-details">
      <h1>{work.title}</h1>

      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {work.img.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="2000"
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`${work.title} screenshot ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Project details */}
      <p>
        <strong className="strong">ID:</strong> {work.id}
      </p>
      <p>
        <strong className="strong">Description:</strong> {work.description}
      </p>
      <p>
        <strong className="strong">Subtitle:</strong> {work.subtitle}
      </p>
      <p>
        <strong>Link:</strong>{" "}
        <a href={work.link} target="_blank" rel="noopener noreferrer">
          {work.link}
        </a>
      </p>
    </div>
  );
}
