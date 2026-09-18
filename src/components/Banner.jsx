import bannerImg from "../assets/Banner--img.png";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <section id="banner" className="section banner">
      <div className="container">
        <h2 className="banner__title">Let&apos;s find it together.</h2>

        <div className="banner__grid">
          <figure className="banner__agent">
            <img
              src={bannerImg}
              alt="Pablo Enrique, real estate agent"
              className="banner__img"
            />
            <figcaption className="banner__caption">
              <p className="banner__agent-name">&ldquo;Pablo Enrique&rdquo;</p>
              <p className="banner__agent-role">Real estate agent</p>
            </figcaption>
          </figure>

          <div className="banner__text">
            <p className="banner__lead">
              Speak directly with one of our Costa Blanca{" "}
              <span className="banner__accent">specialists</span>. No obligation, just
              honest advice.
            </p>
            <p className="banner__desc">
              Call us, or book a viewing at a time that suits you.
            </p>

            <div className="banner__actions">
              <a href="tel:+34612456789" className="btn">Call us</a>

              <NavLink to="/contact" className="btn btn--outline">
                Book a viewing
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;