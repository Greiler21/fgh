import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Immobiliensuche = () => {
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
            <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h1>{t.search.title}</h1>
                <p style={{ color: 'var(--color-text-light)', marginTop: 'var(--spacing-sm)' }}>
                    {t.search.desc}
                </p>
            </header>

            <div className="glass" style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: 'var(--spacing-xl) var(--spacing-lg)',
                borderRadius: '12px',
                textAlign: 'center'
            }}>
                <h3 style={{ marginBottom: 'var(--spacing-md)' }}>{t.search.advanced}</h3>
                <p style={{ marginBottom: 'var(--spacing-lg)' }}>{t.search.reqLogin}</p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <input
                        type="text"
                        placeholder={t.search.placeholder}
                        style={{
                            padding: '1rem',
                            flex: '1',
                            minWidth: '250px',
                            border: '1px solid var(--color-border)',
                            borderRadius: '4px',
                            fontFamily: 'var(--font-body)'
                        }}
                    />
                    <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Search size={18} />
                        {t.search.btnSearch}
                    </button>
                </div>

                <div style={{ marginTop: 'var(--spacing-lg)' }}>
                    <button className="btn btn-outline">{t.search.btnLogin}</button>
                </div>
            </div>
        </div>
    );
};

export default Immobiliensuche;
