import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchListings } from "./services/idealista";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyPage from "./pages/PropertyPage";
import DestinationsPage from "./pages/DestinationsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/notFound";
import ScrollToTop from "./components/ScrollToTop";


const CURATED_IDS = ["111971400", "111772640", "106971178", "110024483", "108678622", "111499577", "104449144", "104834875", "112139332", "110462073", "111708137", "111169779", "102702592", "112161772", "111896177", "112365308", "108857073", "104835046", "108584328", "111825190", "104834977", "112416969", "110085645", "108438282", "102615441", "108311064", "110940632", "111861492", "112329942", "101289607", "111600305", "91606045", "111793497", "111503656", "102258431", "106876058", "109964982", "108578416", "106644290", "110950764", "111546789", "110022033", "111722986", "110006369", "112210280", "104110351", "110652820", "108651544", "111032971", "111164658", "109371786", "108578393", "111991334", "111277508", "112020322", "108352298", "104835053", "110287263", "111757317", "104834196", "111596240", "110941605", "109869671", "108474336", "93710112", "111838545", "110678553", "110943362", "111717659", "111759630", "110022054", "109420385", "110494947", "110565643", "109317099"];

const selectProperties = (pool, ids, count, taken) => {
  const seen = new Set();
  const picked = [];

  const add = (property) => {
    if (!property) return;
    if (picked.length >= count) return;
    if (seen.has(property.municipality)) return;
    if (taken.has(property.propertyCode)) return;

    seen.add(property.municipality);
    taken.add(property.propertyCode);
    picked.push(property);
  };

  ids.forEach((code) => add(pool.find((p) => p.propertyCode === code)));
  pool.forEach((property) => add(property));

  return picked;
};

const App = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings().then((data) => {
      setTimeout(() => {
        setListings(data);
        setLoading(false);
      }, 500);
    });
  }, []);

  const taken = new Set();
  const featured = selectProperties(listings, CURATED_IDS, 6, taken);
  const recent = selectProperties(listings, CURATED_IDS, 3, taken);
  const curated = CURATED_IDS
    .map((code) => listings.find((p) => p.propertyCode === code))
    .filter(Boolean);

  return (
    
    <>
  <ScrollToTop />
  <main>
    <Routes>
          <Route path="/" element={<HomePage featured={featured} recent={recent} />} />
          <Route path="/properties" element={<PropertiesPage listings={curated} loading={loading} />} />
          <Route path="/property/:propertyCode" element={<PropertyPage listings={listings} loading={loading} />} />
          <Route path="/destinations" element={<DestinationsPage listings={curated} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;