import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer.jsx";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/errer404/error404.jsx";
import Projectdeatile from "./components/Projects/Projectdeatile.jsx";

function App() {
  const [load, SetLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      SetLoader(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {load ? (
        <Loader load={load} />
      ) : (
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/project-details" element={<Projectdeatile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
