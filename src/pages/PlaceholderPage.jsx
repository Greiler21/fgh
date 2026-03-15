import React from 'react';

const PlaceholderPage = ({ title, content }) => {
    return (
        <div className="container animate-fade-in" style={{ padding: 'var(--spacing-xl) 0', minHeight: '60vh' }}>
            <h1>{title}</h1>
            <div style={{ marginTop: 'var(--spacing-md)' }} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PlaceholderPage;
