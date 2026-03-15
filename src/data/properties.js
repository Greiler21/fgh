export const getProperties = (t, lang = 'en') => [
    {
        id: 1,
        image: '214046697-1.jpg',
        title: t.home.properties.p1,
        location: 'Cape Coral, FL',
        beds: 4,
        baths: 3,
        sqft: 220,
        price: '$ 895,000',
        status: t.home.status.new,
        description: lang === 'de'
            ? 'Dieses atemberaubende Anwesen bietet luxuriöses Wohnen in erstklassiger Lage. Es verfügt über geräumige Zimmer, eine moderne Küche mit hochwertigen Geräten und wunderschön angelegte Außenbereiche, die sich perfekt für Unterhaltungen eignen. Die durchdachte Aufteilung bietet sowohl Komfort als auch Eleganz.'
            : 'This stunning property offers luxurious living in a prime location. It features spacious rooms, a modern kitchen with high-end appliances, and beautifully landscaped outdoor areas perfect for entertaining. The thoughtful layout provides both comfort and elegance.',
        images: ['214046697-1.jpg', '215039320-1.jpg', '214056983-1.jpg', 'pier.jpg', 'hero-bg.jpg', '214046697-1.jpg'],
        generalAmenities: lang === 'de' ? ['Meerblick', 'Am Wasser', 'Stadtwasser', 'Kanalisation'] : ['Gulf view', 'Waterfront', 'City water', 'City sewer'],
        specialFeatures: lang === 'de' ? ['Ziegelboden', 'Zentralstaubsauger', 'Badewanne und separate Dusche', 'Werkstatt', 'Hohe Decken'] : ['Brick flooring', 'Central vacuum system', 'Tub and separate shower', 'Workshop', 'Volume ceilings'],
        exteriorFeatures: lang === 'de' ? ['Holzverkleidung', 'Terrasse', 'Privater Pool', 'Whirlpool'] : ['Wood siding', 'Patio', 'Private pool', 'Spa'],
        inclusions: lang === 'de' ? ['Kühlschrank', 'Mikrowelle', 'Geschirrspüler', 'Ofen', 'Herd'] : ['Refrigerator', 'Microwave', 'Dishwasher', 'Oven', 'Range']
    },
    {
        id: 2,
        image: '214056983-1.jpg',
        title: t.home.properties.p2,
        location: 'Fort Myers, FL',
        beds: 3,
        baths: 2.5,
        sqft: 185,
        price: '$ 650,000',
        status: t.home.status.exclusive,
        description: lang === 'de'
            ? 'Entdecken Sie Ihr Traumhaus in diesem exquisiten Anwesen. Genießen Sie einen offenen, lichtdurchfluteten Wohnbereich, ein Hauptschlafzimmer mit einem spa-ähnlichen Badezimmer und eine Hinterhofoase, die sich wie ein privates Resort anfühlt. Dies ist der ideale Ort, um bleibende Erinnerungen zu schaffen.'
            : 'Discover your dream home in this exquisite property. Enjoy an open-concept living space flooded with natural light, a master suite with a spa-like bathroom, and a backyard oasis that feels like a private resort. This is the ideal place to create lasting memories.',
        images: ['214056983-1.jpg', 'pier.jpg', 'hero-bg.jpg', '214046697-1.jpg', '215039320-1.jpg'],
        generalAmenities: lang === 'de' ? ['Seeblick', 'Eigentümergemeinschaft', 'Stadtwasser'] : ['Lake view', 'Homeowners association', 'City water'],
        specialFeatures: lang === 'de' ? ['Lamellenfenster', 'Fitnessraum', 'Vorratskammer'] : ['Jalousie windows', 'Exercise room', 'Pantry'],
        exteriorFeatures: lang === 'de' ? ['Stuckfassade', 'Überdachte Veranda', 'Privater Pool'] : ['Stucco exterior', 'Screened porch', 'Private pool'],
        inclusions: lang === 'de' ? ['Kühlschrank', 'Waschmaschine', 'Trockner'] : ['Refrigerator', 'Washer', 'Dryer']
    },
    {
        id: 3,
        image: '215039320-1.jpg',
        title: t.home.properties.p3,
        location: 'Pine Island, FL',
        beds: 5,
        baths: 4,
        sqft: 310,
        price: '$ 1,250,000',
        status: t.home.status.premium,
        description: lang === 'de'
            ? 'Erleben Sie unvergleichlichen Luxus und Raffinesse in diesem prächtigen Anwesen. Vom großen Eingangsbereich bis zum spektakulären Blick aufs Wasser wurde jedes Detail sorgfältig ausgearbeitet. Dieses Haus bietet außergewöhnliche Annehmlichkeiten wie einen privaten Bootsanleger, ein Heimkino und einen Weinkeller.'
            : 'Experience unparalleled luxury and sophistication in this magnificent estate. From the grand entrance to the spectacular waterfront views, every detail has been meticulously crafted. This home offers exceptional amenities including a private dock, home theater, and a wine cellar.',
        images: ['215039320-1.jpg', '214056983-1.jpg', '214046697-1.jpg', 'hero-bg.jpg', 'pier.jpg', '215039320-1.jpg'],
        generalAmenities: lang === 'de' ? ['Flussblick', 'Bootsanleger', 'Schiffbares Gewässer zum Ozean'] : ['River view', 'Boat dock', 'Navigable water to ocean'],
        specialFeatures: lang === 'de' ? ['Weinkeller', 'Heimkino', 'Smart Home System', 'Aufzug', 'Maßgeschneiderte Einbauten'] : ['Wine cellar', 'Home theater', 'Smart home system', 'Elevator', 'Custom built-ins'],
        exteriorFeatures: lang === 'de' ? ['Außenküche', 'Infinity-Pool', 'Feuerstelle', 'Gesicherter Eingang'] : ['Outdoor kitchen', 'Infinity pool', 'Fire pit', 'Gated entry'],
        inclusions: lang === 'de' ? ['Sub-Zero Kühlschrank', 'Wolf Herd', 'Weinkühlschrank', 'Waschmaschine', 'Trockner'] : ['Sub-Zero refrigerator', 'Wolf range', 'Wine cooler', 'Washer', 'Dryer']
    }
];

export const getPropertyById = (id, t, lang = 'en') => {
    return getProperties(t, lang).find(prop => prop.id === parseInt(id));
};
