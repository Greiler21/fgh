import React from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { getProperties } from '../data/properties';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram } from 'lucide-react';
import './Home.css';

const Home = () => {
    const { t, language } = useLanguage();

    const featuredProperties = getProperties(t, language);

    return (
        <div className="home-container animate-fade-in">
            {/* Hero Section */}
            <section className="hero" style={{ backgroundImage: "url('./images/aerial-1.jpg')" }}>
                <div className="container">
                    <div className="glass hero-content-box">
                        <h1 className="hero-title">{t.home.title}</h1>
                        <p className="hero-subtitle">
                            {t.home.subtitle}
                        </p>
                        <p className="hero-description">
                            {t.home.description}
                        </p>
                        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/fgh-angebote" className="btn btn-primary">{t.home.btnOffers}</Link>
                            <Link to="/verkaufte-immobilien" className="btn btn-outline" style={{ background: 'var(--color-surface)' }}>{t.home.btnSold}</Link>
                            <a href="https://www.instagram.com/fghrealty?igsh=ZjZ2eXRuNm1kOWho&utm_source=qr" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-surface)', borderColor: '#E1306C', color: '#E1306C' }}>
                                <Instagram size={20} />
                                {t.home.btnInstagram}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="container section-padding">
                <div className="section-header">
                    <h2>{t.home.sectionTitle}</h2>
                    <p>{t.home.sectionDesc}</p>
                </div>

                <div className="property-grid">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>
            </section>

            {/* Services/Features Section */}
            <section className="services-section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                    <div className="service-card glass">
                        <h3>{t.home.services.new}</h3>
                        <p>{t.home.services.newDesc}</p>
                    </div>
                    <div className="service-card glass">
                        <h3>{t.home.services.mls}</h3>
                        <p>{t.home.services.mlsDesc}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
