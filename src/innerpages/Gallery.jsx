import React from 'react';
import '../App.css';
import event from '../assets/event.jpg';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';
import event4 from '../assets/event4.jpg';
import shyam from '../assets/shyam.png';


const Gallery = () => {
    const galleryImages = [
        { id: 1, src: event, alt: 'Republic Day', category: 'Events', year: 2025 },
        { id: 2, src: event1, alt: 'Independence Day', category: 'Events', year: 2025 },
        { id: 3, src: event2, alt: 'Cultural Function', category: 'Events', year: 2025 },
        { id: 4, src: event3, alt: 'Science Class', category: 'Classes', year: 2025 },
        { id: 5, src: event4, alt: 'Annual Day', category: 'Celebrations', year: 2025 },
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
