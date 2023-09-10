import { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import pages from '../utils/pages';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {
    const { pathname } = useLocation();
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const headerRef = useRef(null);

    // Implement a header show-hide animation depending on the scroll direction
    useEffect(() => {
        let prevScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const headerElement = headerRef.current;

            if (!headerElement) {
                return;
            }
            if (prevScroll > currentScroll) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // This function will be used to handle the click events on the navigation links and also creating smooth scrolling behavior
    // when the link is clicked, the function is invoked with an anchor parameter corresponding to the section's name 
    const handleClick = (anchor) => () => {
        const id = `${anchor}`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header>
            <nav className="container grid nav-bar" ref={headerRef}>
                <Link className="nav-bar-logo" to={pages.get('home').path}>
                    <img src={logo} alt="Little Lemon logo" />
                </Link>
                <button
                    className="nav-bar-hamburger"
                    type="button"
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                >
                    {isNavExpanded ?
                        <FontAwesomeIcon icon={faXmark} size="2x" /> :
                        <FontAwesomeIcon icon={faBars} size="2x" />}
                </button>
                <ul
                    className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'}
                    onClick={() => setIsNavExpanded(!isNavExpanded)}
                >
                    {navLinks.map((navLink, index) =>
                        <li key={index}>
                            <Link
                                className={pathname === navLink.path ? 'current-location' : 'smooth-scroll'}
                                to={navLink.path}
                                onClick={handleClick(navLink.anchor)}
                            >
                                {navLink.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;