import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Ferienvillen = () => {
    const { t } = useLanguage();

    return (
        <div className="animate-fade-in">
            {/* Small Hero */}
            <section style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-surface)',
                padding: 'var(--spacing-xl) 0',
                textAlign: 'center',
                backgroundImage: 'url(./images/pier.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)' }}></div>
                <div className="container relative" style={{ zIndex: 1, position: 'relative' }}>
                    <h1 style={{ color: 'var(--color-surface)' }}>{t.rentals.title}</h1>
                </div>
            </section>

            <div className="container" style={{ padding: 'var(--spacing-xl) 0', maxWidth: '800px' }}>
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: 'var(--spacing-md)' }}>
                    {t.rentals.p1}
                </p>
                <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: 'var(--spacing-md)' }}>
                    {t.rentals.p2}
                </p>

                <div className="glass" style={{ padding: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)', borderRadius: '8px', textAlign: 'center' }}>
                    <h3>{t.rentals.plan}</h3>
                    <p style={{ margin: 'var(--spacing-sm) 0 var(--spacing-md)' }}>{t.rentals.contactDesc}</p>
                    <button className="btn btn-primary">{t.rentals.btnContact}</button>
                </div>
            </div>
        </div>
    );
};

export default Ferienvillen;
