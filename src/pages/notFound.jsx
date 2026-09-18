import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <section className="notfound">
        <p className="notfound__code">404</p>
        <h1 className="notfound__title">Page not found</h1>
        <p className="notfound__text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="notfound__button">
          Back to home
        </Link>
      </section>
    </>
  );
};

export default NotFound;