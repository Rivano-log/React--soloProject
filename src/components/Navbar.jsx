
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

import navLogo from "../assets/nav-logo.png";
import whiteLogo from "../assets/footer-logo.png";
import { useEffect, useState } from "react";

const LINKS = [
    { to: "/", label: "Home", end: true },
    { to: "/properties", label: "Properties" },
    { to: "/destinations", label: "Destinations" },
    { to: "/about", label: "About us" },
    { to: "/contact", label: "Contact" },
];

const Navbar = ({ overlay }) => {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (!query.trim()) return;

        navigate(`/properties?search=${encodeURIComponent(query.trim())}`);
        setQuery("");
    };
    useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

    return (
        <nav className={overlay ? "nav nav--overlay" : "nav"}>
            <div className="nav__container">

                <img
                    src={overlay ? navLogo : whiteLogo}
                    alt="Costa Living"
                    className="nav__logo"
                />

                <div className="nav__links">
                    {LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className="nav__link"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <form className="nav__search" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="nav__search-input"
                        placeholder="Search property"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <button type="submit" className="btn btn--sm">Search</button>
                </form>

                <button
                    type="button"
                    className="nav__burger"
                    onClick={() => setOpen(true)}
                    aria-label="Menu"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

            </div>

            {open && (
                <div className="menu" onClick={() => setOpen(false)}>
                    <div
                        className="menu__panel"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            type="button"
                            className="menu__close"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>

                        <div className="menu__links">
                            {LINKS.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.end}
                                    className="menu__link"
                                    onClick={() => setOpen(false)}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        <NavLink
                            to="/contact"
                            className="btn menu__cta"
                            onClick={() => setOpen(false)}
                        >
                            Get in touch
                        </NavLink>

                        <a href="tel:+34612456789" className="menu__phone">
                            <FontAwesomeIcon icon={faPhone} />
                            +34 612 456 789
                        </a>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;