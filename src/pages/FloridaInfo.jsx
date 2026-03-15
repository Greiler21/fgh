import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const FloridaInfo = () => {
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0', minHeight: '60vh' }}>
            <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h1>{t.info.title}</h1>
                <p style={{ color: 'var(--color-text-light)', marginTop: 'var(--spacing-sm)' }}>
                    {t.info.subtitle}
                </p>
            </header>

            <div className="glass" style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                borderRadius: '12px'
            }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-lg)', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-secondary)' }}>{t.info.expertise}</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                            {t.info.desc}
                        </p>
                        <ul style={{
                            marginTop: 'var(--spacing-md)',
                            marginLeft: 'var(--spacing-md)',
                            lineHeight: '2',
                            fontSize: '1.1rem',
                            color: 'var(--color-text)'
                        }}>
                            <li>Cape Coral</li>
                            <li>Fort Myers</li>
                            <li>Sanibel Island</li>
                            <li>Captiva Island</li>
                        </ul>
                    </div>

                    <div style={{ flex: '1', minWidth: '300px' }}>
                        <img
                            src="./images/sanibel_beach2.jpg"
                            alt="Sanibel Beach"
                            style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloridaInfo;
