import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const UnserTeam = () => {
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)', minHeight: '60vh' }}>
            <header style={{ marginBottom: 'var(--spacing-lg)', textAlign: 'center' }}>
                <h1>{t.team.title}</h1>
                <p style={{ color: 'var(--color-text-light)', margin: 'var(--spacing-sm) auto 0' }}>
                    {t.team.subtitle}
                </p>
            </header>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: 'var(--spacing-md)',
                marginTop: 'var(--spacing-lg)'
            }}>
                {/* Brigitte Heindl Card */}
                <div className="team-member glass" style={{ padding: 'var(--spacing-lg)', borderRadius: '12px', textAlign: 'center' }}>
                    <img
                        src="./images/brigitte-heindl.jpg"
                        alt="Brigitte Heindl"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            margin: '0 auto var(--spacing-md)',
                            border: '3px solid var(--color-secondary)'
                        }}
                    />
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Brigitte Heindl</h2>
                    <h4 style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: 'var(--spacing-md)' }}>
                        {t.team.owner}
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-md)' }}>
                        <a href="mailto:brigitte@fghrealty.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
                            <Mail size={16} /> brigitte@fghrealty.com
                        </a>
                    </div>
                </div>

                {/* Klaus Reinig Card */}
                <div className="team-member glass" style={{ padding: 'var(--spacing-lg)', borderRadius: '12px', textAlign: 'center' }}>
                    <img
                        src="./images/klaus-reinig-realtor.jpg"
                        alt="Klaus Reinig"
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '8px',
                            objectFit: 'contain',
                            margin: '0 auto var(--spacing-md)',
                            border: '3px solid var(--color-secondary)'
                        }}
                    />
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Klaus Reinig</h2>
                    <h4 style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginBottom: 'var(--spacing-md)' }}>
                        {t.team.realtor}
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--spacing-md)' }}>
                        <a href="mailto:klaus@FGHRealty.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
                            <Mail size={16} /> klaus@FGHRealty.com
                        </a>
                        <a href="tel:239-849-9045" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)', textDecoration: 'none', fontWeight: '500' }}>
                            <Phone size={16} /> (239) 849 - 9045
                        </a>
                    </div>

                    <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text)', margin: '0 auto' }}>
                        {t.team.p1}
                    </p>
                    <p style={{ fontSize: '1rem', lineHeight: '1.6', color: 'var(--color-text)', margin: 'var(--spacing-sm) auto 0' }}>
                        {t.team.p2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnserTeam;
