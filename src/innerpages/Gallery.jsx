import React from 'react';
import '../App.css';
import event from '../assets/event.jpg';
import events from '../assets/events.jpg';
import eventse from '../assets/eventse.jpg';
import eventimage from '../assets/eventimage.jpg';
import ramu from '../assets/ramu.jpg';
import shyam from '../assets/shyam.png';


const Gallery = () => {
    const galleryImages = [
        { id: 1, src: event, alt: 'Republic Day', category: 'Events', year: 2025 },
        { id: 2, src: events, alt: 'Independence Day', category: 'Events', year: 2025 },
        { id: 3, src: eventse, alt: 'Cultural Function', category: 'Events', year: 2025 },
        { id: 4, src: eventimage, alt: 'Science Class', category: 'Classes', year: 2025 },
        { id: 5, src: ramu, alt: 'Annual Day', category: 'Celebrations', year: 2025 },
        { id: 6, src: shyam, alt: 'Dance Rehearsal', category: 'Practice', year: 2025 },
    ];

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4 text-primary fw-bold">Photo Gallery</h2>
            <div className="row">
                {galleryImages.map((img) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={img.id}>
                        <div className="card shadow-sm h-100">
                            <div className="zoom-wrapper">
                                <img
                                    src={img.src}
                                    className="card-img-top zoom-image"
                                    alt={img.alt}
                                />
                            </div>
                            <div className="card-body text-center">
                                <h6 className="card-title">{img.alt}</h6>
                                <p className="card-text">
                                    <strong>Category:</strong> {img.category} <br />
                                    <strong>Year:</strong> {img.year}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
