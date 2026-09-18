import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <header className="hero">


      <div className="hero__content">
        <h1>Live the <span className="nowrap">Costa Life</span></h1>

        <p className="hero__subtitle">
          Exclusive homes in the most <span className="nowrap">desirable locations</span>
        </p>

        <NavLink to="/properties" className="btn">
          Explore Properties
        </NavLink>

      </div>

      <a href="#properties" className="hero__scroll" aria-label="Scroll to properties">
        <FontAwesomeIcon icon={faAngleDown} />
        <FontAwesomeIcon icon={faAngleDown} />
        <FontAwesomeIcon icon={faAngleDown} />
      </a>

    </header>
  );
};

export default Home;