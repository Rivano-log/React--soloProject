import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from "react-router-dom";



const DestinationsPage = ({ listings = [] }) => {
    const counts = {};

    listings.forEach((p) => {
        counts[p.municipality] = (counts[p.municipality] || 0) + 1;
    });



    const destinations = Object.keys(counts)
        .sort((a, b) => counts[b] - counts[a])
        .slice(0, 9)
        .map((name) => ({
            name,
            count: counts[name],
            image: listings.find((p) => p.municipality === name)?.thumbnail,
        }));







    return (
        <>
            <Navbar />


            <section className="section">
                <div className="container">
                    <p className="section__label">Costa Blanca</p>
                    <h1 className="section__title">Destinations</h1>
                    <p className="dest-intro">
                        The Costa Blanca stretches for more than two hundred kilometres along the
                        Mediterranean, and every town along it has its own character. Altea keeps its
                        whitewashed old quarter above the sea. Jávea hides its villas between pine
                        slopes and sheltered coves. Dénia looks north to the marina, Moraira south to
                        the cliffs. Choose a place below and see what we have there.
                    </p>

                    <div className="dest-grid">
                        {destinations.map((d) => (
                            <Link
                                key={d.name}
                                to={`/properties?place=${encodeURIComponent(d.name)}`}
                                className="dest-card"
                            >
                                <img src={d.image} alt={d.name} className="dest-card__img" />
                                <div className="dest-card__body">
                                    <h2 className="dest-card__title">{d.name}</h2>
                                    <p className="dest-card__count">{d.count} properties</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>







            </section>






        </>


    );
}

export default DestinationsPage;
