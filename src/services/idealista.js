import axios from "axios";

const CACHE_KEY = "costa-living-listings";
const CACHE_TTL = 12 * 60 * 60 * 1000;

const URL = "https://idealista-real-estate.p.rapidapi.com/v1/search";

const BASE_PARAMS = {
  locationIds: "0-EU-ES-03",
  country: "es",
  locale: "en",
  operation: "sale",
  propertyType: "homes",
  maxItems: 40,
  luxury: true,
};

const HEADERS = {
  "x-rapidapi-host": "idealista-real-estate.p.rapidapi.com",
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
};

const fetchPage = (numPage) =>
  axios.get(URL, { params: { ...BASE_PARAMS, numPage }, headers: HEADERS });

export const fetchListings = async () => {
  const cached = localStorage.getItem(CACHE_KEY);

  if (cached) {
    const { savedAt, data } = JSON.parse(cached);
    if (Date.now() - savedAt < CACHE_TTL) {
      return data;
    }
  }

  const responses = await Promise.all([
    fetchPage(1),
    fetchPage(2),
    fetchPage(3),
    fetchPage(4),
  ]);

  const data = responses.flatMap((r) => r.data.elementList);

  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ savedAt: Date.now(), data })
  );

  return data;
};