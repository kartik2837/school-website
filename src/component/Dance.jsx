import React from 'react';
import CountUp from 'react-countup';
import class1 from '../assets/class1.webp';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import { Link } from 'react-router-dom';

const Dance = () => {
    const danceClasses = [
        {
            img: class1,
            title: 'Class 8th – Board Readiness Program',
            description:
                'Focused on strengthening NCERT concepts, exam preparation, and project-based learning across Math, Science, English, Hindi, and Social Science.',
        },
        {
            img: image1,
            title: 'Class 9th – Academic Foundation Program',
            description:
                'Building strong conceptual knowledge with emphasis on Science, Maths, and Social Studies along with continuous assessments and Olympiad prep.',
        },
        {
            img: image2,
            title: 'Class 10th – Pre-Board Mastery',
            description:
                'Full board-focused training with previous year papers, mock exams, revision plans, and subject-wise strategies for success in CBSE/ICSE board exams.',
        },
        {
            img: image3,
            title: 'Class 11th – Stream Foundation Program',
            description:
                'Specialized teaching in Science (PCM/PCB), Commerce, and Humanities. Prepares students for board + competitive exams like JEE/NEET/CLAT.',
        },
        {
            img: image4,
            title: 'Class 12th – Senior Secondary Program',
            description:
                'Board-focused program for Class 12 students in all streams. Includes crash courses, revision drills, career counselling, and test series for board excellence.',
        },
    ];

    const counters = [
        { label: 'Students', end: 1500 },
        { label: 'Instructors', end: 25 },
        { label: 'Workshops', end: 80 },
        { label: 'Awards', end: 10 },
    ];

    return (
        <div className="container-fluid bg-light py-5">
            <div className="container py-5">
                {/* Header */}
                <div className="pb-5 text-center">
                    <h4 className="text-secondary fw-bold">Our School Classes</h4>
                    <h1 className="display-5 mb-0">Classes for Everyone</h1>
                </div>

                {/* Class Cards Grid */}
                <div className="row g-4">
                    {danceClasses.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="class-item bg-white rounded shadow overflow-hidden h-100">
                                <div className="class-img">
                                    <Link to={'/details'}> <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid w-100"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    /> </Link>
                                </div>
                                <div className="p-4">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <Link to={'/details'}
                                        className="btn btn-primary rounded-pill text-white py-2 px-4"

                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Counters */}
                <div className="row text-center mt-5">
                    {counters.map((counter, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <h2 className="text-primary display-5 fw-bold">
                                <CountUp end={counter.end} duration={2} />
                            </h2>
                            <p className="text-secondary fs-5">{counter.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dance;
