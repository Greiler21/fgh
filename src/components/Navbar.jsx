import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.search, path: '/immobiliensuche' },
        { name: t.nav.listings, path: '/fgh-angebote' },
        { name: t.nav.rentals, path: '/ferienvillen' },
        { name: t.nav.info, path: '/florida-info' },
        { name: t.nav.team, path: '/unser-team' },
        { name: t.nav.contact, path: '/kontakt' }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="brand">
                    <span className="brand-text">FGH REALTY</span>
                </Link>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Language Switcher */}
                <div className="lang-switcher">
                    <button
                        className={`lang-btn ${language === 'de' ? 'active' : ''}`}
                        title="Deutsch"
                        onClick={() => setLanguage('de')}
                    >
                        <img src="https://flagcdn.com/w40/de.png" alt="DE" className="flag-icon" />
                    </button>
                    <button
                        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                        title="English"
                        onClick={() => setLanguage('en')}
                    >
                        <img src="https://flagcdn.com/w40/us.png" alt="US" className="flag-icon" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu (Overlay) */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open glass' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
