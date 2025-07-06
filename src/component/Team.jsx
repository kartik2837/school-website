import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Team = () => {
    const testimonials = [
        {
            emoji: '😊',
            quote: 'The instructors are so kind and helpful! My child feels happy and confident every day.',
            author: 'Priya Mehra – Parent',
        },
        {
            emoji: '😊',
            quote: 'The environment is amazing. I’ve learned so much and made great friends!',
            author: 'Anjali Singh – Student',
        },
        {
            emoji: '😊',
            quote: 'Discipline and creativity together — that’s what I love about this school!',
            author: 'Suresh Nair – Parent',
        },
    ];

    const options = {
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        margin: 20,
    };

    return (
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="text-center mb-4">
                    <h4 className="text-secondary fw-bold">💬 Testimonials</h4>
                    <h2 className="display-6">What People Say About Us</h2>
                </div>

                <OwlCarousel className="owl-theme" {...options}>
                    {testimonials.map((testi, index) => (
                        <div
                            className="testimonial-item bg-white rounded shadow p-4 mx-3 text-center"
                            key={index}
                        >
                            <div style={{ fontSize: '5rem' }}>{testi.emoji}</div> {/* Bigger Emoji */}
                            <p className="fs-5 fst-italic text-dark mt-3">“{testi.quote}”</p>
                            <h6 className="text-primary fw-bold mt-3">{testi.author}</h6>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Team;
