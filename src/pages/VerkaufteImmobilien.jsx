import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { useLanguage } from '../contexts/LanguageContext';

const VerkaufteImmobilien = () => {
    const { t } = useLanguage();

    const properties = [
        {
            id: 1,
            image: '221019068-1.jpg',
            title: t.sold.properties.p1,
            location: 'Sanibel, FL',
            beds: 4,
            baths: 4,
            sqft: 350,
            price: t.sold.status,
            status: t.sold.status
        },
        {
            id: 2,
            image: '221039256-1.jpg',
            title: t.sold.properties.p2,
            location: 'Cape Coral, FL',
            beds: 3,
            baths: 3,
            sqft: 220,
            price: t.sold.status,
            status: t.sold.status
        }
    ];

    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0', minHeight: '60vh' }}>
            <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h1>{t.sold.title}</h1>
                <p style={{ color: 'var(--color-text-light)', marginTop: 'var(--spacing-sm)' }}>
                    {t.sold.subtitle}
                </p>
            </header>

            <div className="property-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: 'var(--spacing-lg)'
            }}>
                {properties.map(p => (
                    <PropertyCard key={p.id} {...p} />
                ))}
            </div>
        </div>
    );
};

export default VerkaufteImmobilien;
