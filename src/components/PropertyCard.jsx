import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBath, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const PropertyCard = ({ property }) => {
    
    
  return (
    <Link to={`/property/${property.propertyCode}`} className="card__link">
   <article className="card" data-code="110943362">

      <div className="card__media">
        <img src={property.thumbnail} alt={property.municipality} className="card__img" />
      </div>

      <div className="card__body">

        <div className="card__head">
          <h3 className="card__title">{property.district || property.municipality}</h3>
         <p className="card__location">{property.municipality}</p>
        </div>

        <div className="card__meta">
          <ul className="card__features">
            <li><FontAwesomeIcon icon={faBed} /> {property.rooms}</li>
            <li><FontAwesomeIcon icon={faBath} /> {property.bathrooms}</li>
            <li><FontAwesomeIcon icon={faRulerCombined} /> {property.size} m²</li>
          </ul>

          <p className="card__price">€ {property.price.toLocaleString("nl-NL")}</p>
        </div>

      </div>
    </article>
    </Link>
  );
};

export default PropertyCard;