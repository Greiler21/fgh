import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import './PhotoGallery.css';

const PhotoGallery = ({ images, title }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const mainImage = images[0];
    const thumbnails = images.slice(1, 5); // Show next 4 images as thumbnails
    const remainingCount = Math.max(0, images.length - 5);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
        // Prevent body scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        // Restore body scrolling
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="photo-gallery-container animate-fade-in">
            {/* Main Preview Grid */}
            <div className="gallery-grid">
                <div
                    className="gallery-main-img"
                    onClick={() => openLightbox(0)}
                    role="button"
                    tabIndex={0}
                >
                    <img src={`./images/${mainImage}`} alt={`${title} - Main Preview`} />
                    <div className="img-overlay">
                        <Maximize2 size={32} />
                    </div>
                </div>

                {thumbnails.length > 0 && (
                    <div className={`gallery-thumbnails grid-${thumbnails.length}`}>
                        {thumbnails.map((img, idx) => (
                            <div
                                key={idx}
                                className="thumbnail-wrapper"
                                onClick={() => openLightbox(idx + 1)}
                                role="button"
                                tabIndex={0}
                            >
                                <img src={`./images/${img}`} alt={`${title} - Thumbnail ${idx + 1}`} />
                                {idx === 3 && remainingCount > 0 && (
                                    <div className="more-photos-overlay">
                                        <span>+{remainingCount} Photos</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Fullscreen Lightbox */}
            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-closeBtn" onClick={closeLightbox} aria-label="Close Gallery">
                        <X size={32} />
                    </button>

                    <button className="lightbox-navBtn prev" onClick={prevImage} aria-label="Previous Image">
                        <ChevronLeft size={48} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={`./images/${images[currentImageIndex]}`}
                            alt={`${title} - Fullscreen ${currentImageIndex + 1}`}
                            className="lightbox-main-img"
                        />
                        <div className="lightbox-caption">
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    </div>

                    <button className="lightbox-navBtn next" onClick={nextImage} aria-label="Next Image">
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default PhotoGallery;
