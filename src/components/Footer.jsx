import footerLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const DESTINATIONS = ["Benissa", "Altea", "Jávea/Xàbia", "Finestrat"];

const Footer = () => {
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.includes("@") || !email.includes(".")) return;

        setSending(true);

        setTimeout(() => {
            setSending(false);
            setSent(true);
            setEmail("");

            setTimeout(() => setSent(false), 3000);
        }, 1000);
    };

    return (
        <footer id="footer" className="footer">
            <div className="container footer__inner">

                <div className="footer__brand">
                    <img src={footerLogo} alt="Costa Living" className="footer__logo" />
                    <address className="footer__address">
                        <p>Avenida Costa Blanca 100<br />03001 Alicante, Spain</p>
                        <p><a href="tel:+34612456789">+34 612 456 789</a></p>
                        <p><a href="mailto:info@costa-living.es">info@costa-living.es</a></p>
                    </address>
                </div>

                <nav className="footer__col" aria-label="Footer">
                    <h3 className="footer__heading">Explore</h3>
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/properties" className="footer__link">Properties</Link>
                    <Link to="/destinations" className="footer__link">Destinations</Link>
                    <Link to="/contact" className="footer__link">Contact</Link>
                </nav>

                <div className="footer__col">
                    <h3 className="footer__heading">Popular destinations</h3>
                    {DESTINATIONS.map((place) => (
                        <Link
                            key={place}
                            to={`/properties?place=${encodeURIComponent(place)}`}
                            className="footer__link"
                        >
                            {place}
                        </Link>
                    ))}
                </div>
                <div className="footer__col">
                    <h3 className="footer__heading">Newsletter</h3>

                    <form className="footer__form" onSubmit={handleSubscribe}>
                        <label htmlFor="newsletter" className="footer__label">
                            Stay up to date with new listings
                        </label>

                        <input
                            id="newsletter"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email address"
                            className="footer__input"
                        />

                        <button type="submit" className="btn btn--sm" disabled={sending}>
                            {sending ? <span className="spinner"></span> : "Subscribe"}
                        </button>
                    </form>

                    {sent && (
                        <div className="toast">
                            <FontAwesomeIcon icon={faCircleCheck} />
                            <span>Thank you — you are subscribed.</span>
                        </div>
                    )}

                    <div className="footer__hours">
                        <h3 className="footer__heading">Opening hours</h3>
                        <p>Mon – Fri &nbsp;9:00 – 18:00</p>
                        <p>Sat &nbsp;10:00 – 14:00</p>
                    </div>
                </div>

            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <div className="footer__social">
                        <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
                        <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
                    </div>

                    <p className="footer__credit">Design by Rivano Imanuel</p>
                    <p className="footer__copy">© {new Date().getFullYear()} Costa Living</p>
                </div>
            </div>
            {sent && (
                <div className="toast">Thank you — you are subscribed.</div>
            )}
        </footer>
    );
};

export default Footer;