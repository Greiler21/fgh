import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './PropertyCard.css';

const PropertyCard = ({ id, image, title, location, beds, baths, sqft, price, status }) => {
    const { t } = useLanguage();

    return (
        <div className="property-card animate-fade-in">
            <div className="property-image-wrapper">
                <img src={`./images/${image}`} alt={title} className="property-image" />
                {status && <div className="property-badge">{status}</div>}
                <div className="property-price">{price}</div>
            </div>

            <div className="property-content">
                <h3 className="property-title">{title}</h3>
                <p className="property-location">
                    <MapPin size={16} /> {location}
                </p>

                <div className="property-features">
                    <div className="feature">
                        <Bed size={18} />
                        <span>{beds} {t.propertyCard.beds}</span>
                    </div>
                    <div className="feature">
                        <Bath size={18} />
                        <span>{baths} {t.propertyCard.baths}</span>
                    </div>
                    <div className="feature">
                        <Square size={18} />
                        <span>{sqft} {t.propertyCard.sqft}</span>
                    </div>
                </div>

                <Link to={`/property/${id}`} className="btn btn-outline property-btn">
                    {t.propertyCard.btnDetails}
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
