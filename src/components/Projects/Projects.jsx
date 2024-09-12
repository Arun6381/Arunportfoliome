import "./Projects.css";
import Todo from "./../../assets/project/firebase.png";
import Todo1 from "./../../assets/project/Todo1.png";
import Todo2 from "./../../assets/project/Todo2.png";
import Todo3 from "./../../assets/project/Todo3.png";
import Todo4 from "./../../assets/project/Todo4.png";

import TravelList from "./../../assets/project/TravalList.png";
import Travel1 from "./../../assets/project/Travel1.png";
import Travel2 from "./../../assets/project/Travel2.png";

import Food from "./../../assets/project/Food.png";
import Food1 from "./../../assets/project/Food1.png";
import Food2 from "./../../assets/project/Food2.png";

import Weather from "./../../assets/project/Weather.png";
import Weather1 from "./../../assets/project/Weather1.png";
import Weather2 from "./../../assets/project/Weather2.png";

import Blog from "./../../assets/project/fizzy.png";
import Blog1 from "./../../assets/project/Fizy1.png";
import Blog2 from "./../../assets/project/Fizy2.png";
import Blog3 from "./../../assets/project/Fizy3.png";

import Quiz from "./../../assets/project/Rquiz.png";
import Reactq1 from "./../../assets/project/Reactq1.png";
import Reactq2 from "./../../assets/project/Reactq2.png";

import Movies from "./../../assets/project/Movies.png";
import Movie1 from "./../../assets/project/Movie1.png";
import Movie2 from "./../../assets/project/Movie2.png";

import World from "./../../assets/project/World.png";
import World1 from "./../../assets/project/World1.png";
import World2 from "./../../assets/project/World2.png";

import Chart from "./../../assets/project/Chart.png";
import Chart1 from "./../../assets/project/Chat1.jpg";
import Chart2 from "./../../assets/project/Chart2.jpg";

import Native from "./../../assets/project/Native.jpg";
import Native1 from "./../../assets/project/Native1.jpg";
import Native2 from "./../../assets/project/Nativ2.jpg";

import useScrollAnimation from "./useScrollAnimation.jsx";

import { useNavigate } from "react-router-dom";

const works = [
  {
    id: 1,
    title: "World Wise",
    description:
      "World Wise is an interactive web application that allows users to create and manage a travel list. By utilizing the Leaflet.js library, the application provides users with an engaging map interface where they can mark the places they've visited or wish to visit. It also allows them to store additional information about each destination, making it a perfect tool for travel enthusiasts to keep track of their adventures.",
    subtitle: "Web App",
    img: [World, World1, World2],
    link: "https://github.com/Arun6381/react-final-project-world-wise",
    flex: "start",
  },
  {
    id: 2,
    title: "Ordering Food",
    description:
      "Ordering Food is an online food delivery platform that allows users to browse, select, and order food from their favorite restaurants. The application features real-time order tracking, a secure checkout process, and a user-friendly interface that makes food ordering quick and convenient. Integrated with popular payment gateways, it also ensures safe transactions and smooth user experiences.",
    subtitle: "Web App",
    img: [Food, Food1, Food2],
    link: "https://github.com/Arun6381/ordering-food-app-rounterv6-dataloading",
    flex: "start",
  },
  {
    id: 9,
    title: "Chart Application",
    description:
      "This Chart Application is a fully functional group chat platform developed using the MERN stack. It allows users to create chat rooms, invite friends, and engage in real-time conversations. With intuitive UI and robust backend using GraphQL, this app also features user authentication, message history, and the ability to create both public and private group chats.",
    subtitle: "MERN Stack",
    img: [Chart, Chart1, Chart2],
    link: "https://github.com/Arun6381/group-chat-gql",
    flex: "end",
  },
  {
    id: 10,
    title: "All Openings",
    description:
      "All Openings is a job board application built using React Native, designed to help users find and apply to job openings at various companies. The app provides real-time job listings with filters for job types, locations, and industries, helping users discover new opportunities. It integrates with major job APIs to provide a comprehensive list of available jobs.",
    subtitle: "Native App",
    img: [Native, Native1, Native2],
    link: "https://github.com/Arun6381/react-native-job-board",
    flex: "end",
  },
  {
    id: 3,
    title: "Firebase-crud app",
    description:
      "The Firebase-CRUD app is a user management application that leverages Firebase as the backend for handling CRUD operations. Users can register, log in using either Google authentication or email/password, and store user-related data with ease. It also features real-time updates, allowing users to interact with the app smoothly and efficiently.",
    subtitle: "User Management with Firebase",
    img: [Todo, Todo1, Todo2, Todo3, Todo4],
    link: "https://github.com/Arun6381/fire-store-movcoll",
    flex: "start",
  },
  {
    id: 4,
    title: "Movie Review",
    description:
      "Movie Review is a platform where users can browse and submit reviews for their favorite movies. The app features a clean and intuitive UI, allowing users to search for movies, view details, and rate films based on personal experience. Users can leave feedback, add comments, and explore what other users think about the latest releases.",
    subtitle: "Movie Review Platform",
    img: [Movies, Movie1, Movie2],
    link: "https://github.com/Arun6381/movie-local-review",
    flex: "start",
  },
  {
    id: 5,
    title: "Weather app",
    description:
      "Weather App provides accurate and real-time weather information for selected cities around the globe. Built with Leaflet.js for the map view and OpenWeatherMap API, users can easily search for a city, view current weather conditions, and get forecasts. The app is designed to be responsive, ensuring a smooth experience on both mobile and desktop devices.",
    subtitle: "Weather App Using Leaflet",
    img: [Weather, Weather2, Weather1],
    link: "https://github.com/Arun6381/Clicked-Weather-app-leaflet",
    flex: "end",
  },
  {
    id: 6,
    title: "E-Commerce",
    description:
      "This E-Commerce application is a complete online store built using the MERN stack. Users can browse a wide range of products, add items to their cart, and complete the checkout process with secure payment options. The app features user authentication, a product recommendation engine, and real-time inventory tracking, providing an all-in-one shopping solution.",
    subtitle: "MERN Stack",
    img: [Blog, Blog1, Blog2, Blog3],
    link: "https://github.com/Arun6381/e-comfizzystore",
    flex: "end",
  },
  {
    id: 7,
    title: "Quiz App",
    description:
      "Quiz App is an interactive web application designed to help users test their knowledge on various topics, particularly React. The app pulls questions from a JSON server and presents them in a quiz format. Users can view their scores at the end, and retry quizzes to improve their knowledge. It also features a timer and score tracking for an engaging experience.",
    subtitle: "Web App Using JSON Server",
    img: [Quiz, Reactq1, Reactq2],
    link: "https://github.com/Arun6381/quizz-using-context-reducer-json-server",
    flex: "start",
  },
  {
    id: 8,
    title: "TravelList",
    description:
      "TravelList is a web application designed to help users plan their travel experiences. By using an interactive map, users can add and remove destinations from their personal travel list. The app also allows users to save notes and additional information about each destination, helping them organize their travel plans effectively.",
    subtitle: "TravelList using React",
    img: [TravelList, Travel2, Travel1],
    link: "https://github.com/Arun6381/travellist-react",
    flex: "start",
  },
];

function Projects() {
  const elementsRef = useScrollAnimation();
  const navigate = useNavigate();

  const goto = (work) => {
    navigate("/project-details", { state: { work } });
  };
  return (
    <section className="project-section">
      <p className="project-title">
        My <span className="spanWork">Works</span>
      </p>
      <div className="project-grid">
        {works.map((work, index) => (
          <div
            onClick={() => goto(work)} // Pass the project data to the goto function
            key={work.id}
            className={`project-card ${
              work.flex === "end" ? "flex-end" : "flex-start"
            } scroll-animation`}
            ref={(el) => (elementsRef.current[index] = el)}
          >
            <div
              className="project-image"
              style={{
                backgroundImage: `url(${work.img[0]})`,
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
