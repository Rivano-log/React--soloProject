import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import PropertiesSection from "../components/PropertiesSection";
import Banner from "../components/Banner";

const PropertiesPage = ({ listings, loading }) => {
    const [searchParams] = useSearchParams();

    const [sortBy, setSortBy] = useState("default");
    const [place, setPlace] = useState(searchParams.get("place") || "all");
    const [search, setSearch] = useState(searchParams.get("search") || "");

useEffect(() => {
    ("URL:", searchParams.get("place"));
    setPlace(searchParams.get("place") || "all");
    setSearch(searchParams.get("search") || "");
}, [searchParams]);

    const municipalities = [...new Set(listings.map((p) => p.municipality))].sort();

    const byPlace =
        place === "all"
            ? listings
            : listings.filter((p) => p.municipality === place);

    const filtered = byPlace.filter((p) =>
        `${p.municipality} ${p.district || ""}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const sorted = [...filtered];

    if (sortBy === "price-asc") sorted.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") sorted.sort((a, b) => b.price - a.price);
    if (sortBy === "size-desc") sorted.sort((a, b) => b.size - a.size);

    const visible = sorted.slice(0, 9);

    return (
        <>
            <Navbar />

            <PropertiesSection
                id="all"
                label="Find Your Place"
                title="The Costa Living Collection"
                properties={visible}
                loading={loading}
            >
                <div className="filters">
                    <div className="search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search__icon" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by town or area"
                            className="search-bar__input"
                        />
                    </div>

                    <div className="sort-bar">
                        <select
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            className="sort"
                        >
                            <option value="all">All destinations</option>
                            {municipalities.map((name) => (
                                <option key={name} value={name}>{name}</option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort"
                        >
                            <option value="default" disabled>Sort</option>
                            <option value="price-asc">Price: low to high</option>
                            <option value="price-desc">Price: high to low</option>
                            <option value="size-desc">Size: largest first</option>
                        </select>
                    </div>
                </div>
            </PropertiesSection>

            <Banner />
        </>
    );
};

export default PropertiesPage;