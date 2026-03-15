import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, ArrowLeft, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPropertyById } from '../data/properties';
import PhotoGallery from '../components/PhotoGallery';
import './PropertyDetails.css';

const PropertyDetails = () => {
    const { id } = useParams();
    const { t, language } = useLanguage();

    const property = getPropertyById(id, t, language);

    if (!property) {
        return (
            <div className="container section-padding" style={{ textAlign: 'center' }}>
                <h2>Property Not Found</h2>
                <p>The property you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                    Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="property-details-page animate-fade-in">
            {/* Header Area */}
            <div className="container" style={{ paddingTop: 'calc(var(--spacing-md) + 20px)', paddingBottom: '0' }}>
                <Link to="/" className="back-link" style={{ color: 'var(--color-primary)' }}>
                    <ArrowLeft size={20} /> Back to Search
                </Link>
                <div className="property-title-header">
                    <h1 style={{ marginBottom: 'var(--spacing-xs)', fontSize: '2.5rem' }}>{property.title}</h1>
                    <div className="property-meta">
                        <p className="hero-location" style={{ color: 'var(--color-text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <MapPin size={20} /> {property.location}
                        </p>
                        <div className="hero-price" style={{ color: 'var(--color-primary)', fontSize: '2rem', fontWeight: 700 }}>
                            {property.price}
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo Gallery Component */}
            <div className="container">
                <PhotoGallery images={property.images} title={property.title} />
            </div>

            {/* Content Section */}
            <section className="container single-property-content" style={{ paddingBottom: 'var(--spacing-md)' }}>
                <div className="details-grid">
                    <div className="main-details glass">
                        <h2>Description</h2>
                        <p className="property-description">
                            {property.description}
                        </p>

                        <h3>Key Features</h3>
                        <div className="features-list">
                            <div className="feature-item">
                                <Bed size={24} />
                                <div>
                                    <span className="feature-value">{property.beds}</span>
                                    <span className="feature-label">{t.propertyCard.beds}</span>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Bath size={24} />
                                <div>
                                    <span className="feature-value">{property.baths}</span>
                                    <span className="feature-label">{t.propertyCard.baths}</span>
                                </div>
                            </div>
                            <div className="feature-item">
                                <Square size={24} />
                                <div>
                                    <span className="feature-value">{property.sqft}</span>
                                    <span className="feature-label">{t.propertyCard.sqft}</span>
                                </div>
                            </div>
                        </div>

                        {/* Extended Features Sections */}
                        <div className="extended-features">
                            {property.generalAmenities && property.generalAmenities.length > 0 && (
                                <div className="feature-section">
                                    <h4>General Amenities</h4>
                                    <ul className="amenity-list">
                                        {property.generalAmenities.map((item, idx) => (
                                            <li key={idx}><CheckCircle size={16} className="amenity-icon" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {property.specialFeatures && property.specialFeatures.length > 0 && (
                                <div className="feature-section">
                                    <h4>Special Features</h4>
                                    <ul className="amenity-list">
                                        {property.specialFeatures.map((item, idx) => (
                                            <li key={idx}><Star size={16} className="amenity-icon" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {property.exteriorFeatures && property.exteriorFeatures.length > 0 && (
                                <div className="feature-section">
                                    <h4>Exterior Features</h4>
                                    <ul className="amenity-list">
                                        {property.exteriorFeatures.map((item, idx) => (
                                            <li key={idx}><CheckCircle size={16} className="amenity-icon" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {property.inclusions && property.inclusions.length > 0 && (
                                <div className="feature-section">
                                    <h4>Inclusions</h4>
                                    <ul className="amenity-list">
                                        {property.inclusions.map((item, idx) => (
                                            <li key={idx}><CheckCircle size={16} className="amenity-icon" /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="contact-sidebar">
                        <div className="glass contact-card sticky">
                            <h3>Interested in this property?</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)' }}>
                                Contact our luxury real estate team to schedule a private viewing.
                            </p>
                            <Link to="/kontakt" className="btn btn-primary full-width" style={{ display: 'block', textAlign: 'center' }}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PropertyDetails;
