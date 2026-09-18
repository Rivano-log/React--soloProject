import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";


const PropertyPage = ({ listings, loading }) => {
  const { propertyCode } = useParams();

  const [showForm, setShowForm] = useState(false);

  const property = listings.find((p) => p.propertyCode === propertyCode);

  if (loading) {
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <div className="skeleton skeleton--img"></div>
          </div>
        </section>
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Navbar />
        <section className="section">
          <div className="container">
            <h1 className="section__title">Property not found</h1>
          </div>
        </section>
      </>
    );
  }

  const hero = property.multimedia?.images?.[0]?.url || property.thumbnail;

  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <p className="section__label">{property.municipality}</p>
          <h1 className="section__title">
            {property.district || property.municipality}
          </h1>

          <img src={hero} alt={property.municipality} className="detail__img" />

          <div className="detail">
            <div className="detail__main">
              <h2 className="detail__heading">About this property</h2>
              <p className="detail__text">{property.description}</p>
            </div>

            <aside className="detail__aside">
              <p className="detail__price">
                € {property.price.toLocaleString("nl-NL")}
              </p>

              <ul className="detail__facts">
                <li><span>Bedrooms</span><span>{property.rooms}</span></li>
                <li><span>Bathrooms</span><span>{property.bathrooms}</span></li>
                <li><span>Living area</span><span>{property.size} m²</span></li>
                <li><span>Location</span><span>{property.municipality}</span></li>
              </ul>

              <button className="btn" onClick={() => setShowForm(true)}>
                Book a viewing
              </button>
            </aside>
          </div>

          {showForm && (
            <div className="modal" onClick={() => setShowForm(false)}>
              <div className="modal__box" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="modal__close"
                  onClick={() => setShowForm(false)}
                  aria-label="Close"
                >
                  ×
                </button>

                <h2 className="viewing__title">Book a viewing</h2>
                <p className="viewing__sub">
                  {property.district || property.municipality}
                </p>

                <ContactForm buttonLabel="Send request" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertyPage;