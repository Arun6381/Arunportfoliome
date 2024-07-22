import RingLoader from "react-spinners/RingLoader";

import "./Loder.css"; // Assuming you have the CSS in a separate file

const Loader = ({ load }) => {
  return (
    load && (
      <div id="preloader">
        <RingLoader
          color="#caa11a"
          size={60}
          id={load ? "preloader" : "preloader-none"}
        />
      </div>
    )
  );
};

export default Loader;
