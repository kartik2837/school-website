import React, { useEffect } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faSchool,
    faBullseye,
    faUserTie,
    faBookOpen,
    faStar,
    faGlobe,
    faLaptopCode,
    faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import schoolImage from '../assets/image1.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="container my-5">
            {/* Section 1 - Introduction */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 wow fadeInLeft" data-wow-delay="0.2s">
                    <img
                        src={schoolImage}
                        alt="Maharishi Vidya Mandir"
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-6 wow fadeInRight" data-wow-delay="0.4s">
                    <h2 className="mb-3">
                        <FontAwesomeIcon icon={faSchool} className="me-2 text-primary" />
                        <strong>About Maharishi Vidya Mandir</strong>
                    </h2>
                    <p>
                        <strong>Maharishi Vidya Mandir (MVM)</strong> is a pioneering educational institution established under the
                        divine guidance of <strong>His Holiness Maharishi Mahesh Yogi</strong>. Our goal is to blend
                        <strong> modern scientific education</strong> with the
                        <strong> eternal principles of Vedic knowledge</strong>. With over <strong>150 branches</strong> across
                        India, MVM has created a space where students not only excel academically but also spiritually and morally.
                    </p>
                    <p>
                        At MVM, <strong>Transcendental Meditation</strong> is practiced daily, nurturing inner peace, creativity,
                        and sharp intellect. We focus on the <strong>complete development of every child</strong> — physically,
                        emotionally, intellectually, and spiritually.
                    </p>
                </div>
            </div>

            {/* Section 2 - Vision & Mission */}
            <div className="row mb-5">
                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h3>
                        <FontAwesomeIcon icon={faBullseye} className="me-2 text-success" />
                        <strong>Our Vision</strong>
                    </h3>
                    <p>
                        To create a <strong>stress-free society</strong> filled with enlightened individuals who lead a
                        value-oriented life. Our vision is to make every child a <strong>global citizen</strong> rooted in Indian
                        culture, living in harmony with nature and fellow beings.
                    </p>
                </div>

                <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <h3>
                        <FontAwesomeIcon icon={faBookOpen} className="me-2 text-info" />
                        <strong>Our Mission</strong>
                    </h3>
                    <p>
                        To deliver <strong>world-class education</strong> enriched with <strong>spiritual discipline</strong> and
                        the knowledge of consciousness, enabling students to succeed in every field of life while maintaining peace
                        of mind.
                    </p>
                </div>
            </div>

            {/* Section 3 - Core Values */}
            <div className="row mb-5">
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <h3>
                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                        <strong>Our Core Values</strong>
                    </h3>
                    <ul className="list-unstyled fs-5">
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Integrity</strong> — Building character and truthfulness
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Discipline</strong> — Promoting focus, manners, and punctuality
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Innovation</strong> — Encouraging curiosity and modern learning
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Spirituality</strong> — Daily meditation and connection with inner self
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section 4 - What We Offer */}
            <div className="row mb-5">
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.6s">
                    <h3>
                        <FontAwesomeIcon icon={faGlobe} className="me-2 text-secondary" />
                        <strong>What We Offer</strong>
                    </h3>
                    <ul className="list-unstyled fs-5">
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Digital Classrooms</strong> with audio-visual learning aids
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Modern Labs</strong> for science, robotics, and computer science
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Co-curricular Activities</strong> like Yoga, Music, Dance, and Sports
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" />
                            <strong>Clean & Green Campus</strong> with nature-friendly infrastructure
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section 5 - Faculty */}
            <div className="row mb-5">
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.7s">
                    <h3>
                        <FontAwesomeIcon icon={faChalkboardTeacher} className="me-2 text-dark" />
                        <strong>Our Teachers</strong>
                    </h3>
                    <p>
                        Our faculty is a perfect blend of <strong>experience and enthusiasm</strong>. They are not just subject
                        experts but also <strong>life mentors</strong> who guide students in developing a sound character. Teachers
                        at MVM undergo <strong>spiritual training and meditation</strong> to maintain positive energy in classrooms.
                    </p>
                </div>
            </div>

            {/* Section 6 - Principal’s Message */}
            <div className="row mb-5">
                <div className="col-md-12 wow fadeInUp" data-wow-delay="0.8s">
                    <h3>
                        <FontAwesomeIcon icon={faUserTie} className="me-2 text-info" />
                        <strong>Principal's Message</strong>
                    </h3>
                    <p>
                        “At Maharishi Vidya Mandir, our aim is not just to teach but to <strong>transform</strong>. We strive to
                        create a learning ecosystem where students become <strong>self-aware, confident</strong> and
                        <strong>culturally rooted</strong>. Education here is not limited to books — it is about
                        <strong>discovering purpose</strong> and <strong>cultivating compassion</strong>.”
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
