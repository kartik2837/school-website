import React from 'react';
import class1st from '../assets/class1st.webp'
import class2nd from '../assets/class2nd.jpg'
import class3rd from '../assets/class3rd.webp'
import class4th from '../assets/class4th.jpg'
import class5th from '../assets/class5th.jpg'
import class6th from '../assets/class6th.jpg'
import class7th from '../assets/class7th.webp'
import class8th from '../assets/class8th.jpg'
import class9th from '../assets/class9th.webp'
import class10th from '../assets/class10th.webp'
import class11th from '../assets/class11th.jpeg'
import class12th from '../assets/class12th.jpeg'
const classesData = [
    {
        title: 'Class 1 – Fun & Basics',
        img: class1st,
        description: 'Building curiosity and creativity through play-based learning and foundational subjects.',
    },
    {
        title: 'Class 2 – Joyful Learning',
        img: class2nd,
        description: 'Enhancing reading, writing, and number skills through engaging activities.',
    },
    {
        title: 'Class 3 – Concept Builders',
        img: class3rd,
        description: 'Strengthening core subjects with interactive learning methods.',
    },
    {
        title: 'Class 4 – Explorers Stage',
        img: class4th,
        description: 'Encouraging logical thinking and moral values with age-appropriate content.',
    },
    {
        title: 'Class 5 – Learning Independence',
        img: class5th,
        description: 'Focus on independent learning, discipline, and preparing for middle school.',
    },
    {
        title: 'Class 6 – Middle School Entry',
        img: class6th,
        description: 'Introduction to new subjects and development of analytical skills.',
    },
    {
        title: 'Class 7 – Skill Enhancement',
        img: class7th,
        description: 'Project-based learning to sharpen observation and collaboration skills.',
    },
    {
        title: 'Class 8 – Academic Foundation',
        img: class8th,
        description: 'Bridge to higher studies with focused approach in core subjects.',
    },
    {
        title: 'Class 9 – Board Preparation Begins',
        img: class9th,
        description: 'Thorough subject understanding and regular evaluations for board readiness.',
    },
    {
        title: 'Class 10 – CBSE Board Focus',
        img: class10th,
        description: 'Complete preparation for board exams with assessments and doubt sessions.',
    },
    {
        title: 'Class 11 – Stream Foundation',
        img: class11th,
        description: 'Choose your stream (Science/Commerce/Arts) and begin specialization.',
    },
    {
        title: 'Class 12 – Final Board Class',
        img: class12th,
        description: 'Master your stream subjects and prepare for college entrance exams.',
    },
];

const Event = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-5 fw-bold">Our School Classes (I to XII)</h2>
            <div className="row">
                {classesData.map((cls, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm border-0">
                            <img src={cls.img} className="card-img-top" alt={cls.title} />
                            <div className="card-body">
                                <h5 className="card-title text-primary fw-bold">{cls.title}</h5>
                                <p className="card-text">{cls.description}</p>
                                <a href="#" className="btn btn-outline-primary rounded-pill px-4">Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;
