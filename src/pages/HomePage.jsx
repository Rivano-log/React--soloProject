import Hero from "../components/Hero";
import PropertiesSection from "../components/PropertiesSection";
import Destinations from "../components/Destinations";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const HomePage = ({ featured, recent }) => {
  return (
    <>
     <Navbar overlay />
      <Hero />
      <PropertiesSection
        id="properties"
        label="Featured properties"
        title="Homes on the Costa Blanca"
        properties={featured}
      />
      <Destinations />
      <PropertiesSection
        id="recent"
        label="Recently added"
        title="New to the market"
        properties={recent}
      />
      <Banner />
    </>
  );
};

export default HomePage;