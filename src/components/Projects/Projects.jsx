import "./Projects.css";
import Todo from "./../../assets/project/firebase.png";
import TravelList from "./../../assets/project/TravalList.png";
import Food from "./../../assets/project/Food.png";
import Weather from "./../../assets/project/Weather.png";
import Blog from "./../../assets/project/fizzy.png";
import Quiz from "./../../assets/project/Rquiz.png";
import Movies from "./../../assets/project/Movies.png";
import World from "./../../assets/project/World.png";
import useScrollAnimation from "./useScrollAnimation.jsx";
const works = [
  {
    id: 1,
    title: "World Wise",
    description:
      "A website that provides A user to store a Travel List using Leaflet.",
    subtitle: "Web App",
    img: World,
    link: "https://github.com/Arun6381/react-final-project-world-wise",
    flex: "start",
  },
  {
    id: 2,
    title: "Ordering Food",
    description: "A website that provides user to ordering food in online.",
    subtitle: "Web App",
    img: Food,
    link: "https://github.com/Arun6381/ordering-food-app-rounterv6-dataloading",
    flex: "start",
  },
  {
    id: 3,
    title: "TravelList",
    description: "A website that provides pirated content for free.",
    subtitle: "TravelList-react",
    img: TravelList,
    link: "https://github.com/Arun6381/travellist-react",
    flex: "end",
  },
  {
    id: 4,
    title: "Movie Review",
    description: "A website that provides pirated content for free.",
    subtitle: "Movie Local Review",
    img: Movies,
    link: "https://github.com/Arun6381/movie-local-review",
    flex: "end",
  },
  {
    id: 5,
    title: "Weather app",
    description: "A website that provides Weather of Selected Cities.",
    subtitle: "Weather app using Leaflet",
    img: Weather,
    link: "https://github.com/Arun6381/Clicked-Weather-app-leaflet",
    flex: "start",
  },
  {
    id: 6,
    title: "E-Commerce",
    description: "A web app that helps Buy products in online",
    subtitle: "Web App",
    img: Blog,
    link: "https://github.com/Arun6381/e-comfizzystore",

    flex: "start",
  },
  {
    id: 7,
    title: "Quiz App",
    description: "A website that Question related to React.",
    subtitle: "Web App Using JSON server",
    img: Quiz,
    link: "https://github.com/Arun6381/quizz-using-context-reducer-json-server",
    flex: "end",
  },
  {
    id: 8,
    title: "Firebase-crud app",
    description:
      "A curd  application with Google login and email login  functionality for easy Managing users.",
    subtitle: "Image storing login signup",
    img: Todo,
    link: "https://github.com/Arun6381/fire-store-movcoll",
    flex: "end",
  },
];

function Projects() {
  const elementsRef = useScrollAnimation();

  return (
    <section className="project-section">
      <p className="project-title">
        My <span className="spanWork">Works</span>
      </p>
      <div className="project-grid">
        {works.map((work, index) => (
          <div
            onClick={() => window.open(work.link)}
            key={work.id}
            className={`project-card ${
              work.flex === "end" ? "flex-end" : ""
            } scroll-animation`}
            ref={(el) => (elementsRef.current[index] = el)}
          >
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${work.img})`,
              }}
            ></div>
            <h3 className="project-card-title">{work.title}</h3>
            <p className="project-subtitle">{work.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
