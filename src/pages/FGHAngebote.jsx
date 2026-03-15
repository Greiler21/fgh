import React from 'react';
import PropertyCard from '../components/PropertyCard';
import { useLanguage } from '../contexts/LanguageContext';

const FGHAngebote = () => {
    const { t } = useLanguage();

    const properties = [
        {
            id: 1,
            image: '214046697-1.jpg',
            title: t.listings.properties.p1,
            location: 'Cape Coral, FL',
            beds: 3,
            baths: 2,
            sqft: 200,
            price: '$ 699,000',
            status: t.listings.status.new
        },
        {
            id: 2,
            image: '217069670-1.jpg',
            title: t.listings.properties.p2,
            location: 'Fort Myers, FL',
            beds: 2,
            baths: 2,
            sqft: 120,
            price: '$ 320,000',
            status: t.listings.status.active
        }
    ];

    return (
        <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
            <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h1>{t.listings.title}</h1>
                <p style={{ color: 'var(--color-text-light)', marginTop: 'var(--spacing-sm)' }}>
                    {t.listings.subtitle}
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

export default FGHAngebote;
