import PropertyCard from "./PropertyCard";

import SkeletonCard from "./SkeletonCard";

const SKELETONS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const PropertiesSection = ({ id, label, title, properties = [], children , loading}) => {
  return (
    <section id={id} className="section">
      <div className="container">
        <p className="section__label">{label}</p>
        <h2 className="section__title">{title} {children}</h2>

       <div className="properties__grid">
  {loading
    ? SKELETONS.map((n) => <SkeletonCard key={n} />)
    : properties.map((property) => (
        <PropertyCard key={property.propertyCode} property={property} />
      ))}
</div>
      </div>
    </section>
  );
};

export default PropertiesSection;