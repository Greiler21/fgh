import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer animate-fade-in">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2 className="footer-title">FGH REALTY</h2>
                    <p className="footer-description">
                        {t.footer.desc}
                    </p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>{t.footer.nav}</h3>
                        <Link to="/immobiliensuche">{t.footer.navSearch}</Link>
                        <Link to="/verkaufte-immobilien">{t.footer.navSold}</Link>
                    </div>
                    <div className="footer-column">
                        <h3>{t.footer.contact}</h3>
                        <a href="mailto:sales@FGHRealty.com">sales@FGHRealty.com</a>
                        <a href="tel:239-540-3485">239-540-3485</a>
                        <Link to="/kontakt">{t.footer.contactForm}</Link>
                    </div>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>{t.footer.copyright.replace('2013-2026', `2013-${currentYear}`)}</p>
                <p>{t.footer.mls}</p>
            </div>
        </footer>
    );
};

export default Footer;
