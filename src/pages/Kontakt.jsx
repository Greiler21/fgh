import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Instagram } from 'lucide-react';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0' }}>
            <h1 style={{ color: 'var(--color-primary)' }}>{t.contactPage.title}</h1>
            <p style={{ maxWidth: '600px', marginBottom: 'var(--spacing-md)' }}>
                {t.contactPage.desc}
            </p>

            <div style={{ display: 'grid', gap: 'var(--spacing-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                <div className="glass" style={{ padding: 'var(--spacing-lg)', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{t.contactPage.office}</h3>
                    <p>Email: <a href="mailto:sales@FGHRealty.com" style={{ color: 'var(--color-secondary)' }}>sales@FGHRealty.com</a></p>
                    <p>{t.contactPage.call.split(' ')[0]}: <a href="tel:239-540-3485" style={{ color: 'var(--color-secondary)' }}>239-540-3485</a></p>
                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)' }}>
                        <a href="https://www.instagram.com/fghrealty?igsh=ZjZ2eXRuNm1kOWho&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#E1306C', textDecoration: 'none', fontWeight: 500 }}>
                            <Instagram size={24} />
                            Instagram
                        </a>
                    </div>
                </div>

                <form className="glass" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)', padding: 'var(--spacing-lg)', borderRadius: '8px' }}>
                    <input type="text" placeholder={t.contactPage.firstName} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-body)' }} />
                    <input type="email" placeholder={t.contactPage.emailLabel} style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-body)' }} />
                    <textarea placeholder={t.contactPage.message} rows="4" style={{ padding: '1rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'var(--font-body)', resize: 'vertical' }}></textarea>
                    <button type="button" className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>{t.contactPage.btnSend}</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
