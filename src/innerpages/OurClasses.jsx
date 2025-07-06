// import React from 'react';
// import { Link } from 'react-router-dom';
// import event from '../assets/event.jpg';
// import event1 from '../assets/event1.jpg';
// import event2 from '../assets/event2.jpg';
// import event3 from '../assets/event3.jpg';
// import event4 from '../assets/event4.jpg';
// import shyam from '../assets/shyam.png';

// const OurClasses = () => {
//     const classData = [
//         {
//             id: 1, name: 'Class 1st', level: 'Primary', image: event, description: 'Basic learning with fun activities.',
//         },
//         {
//             id: 2, name: 'Class 2nd', level: 'Primary', image: event1, description: 'Advance literacy and math basics.',
//         },
//         {
//             id: 3, name: 'Class 3rd', level: 'Primary', image: event2, description: 'Creative learning with field trips.',
//         },
//         {
//             id: 4, name: 'Class 4th', level: 'Primary', image: event3, description: 'Science projects and quizzes.',
//         },
//         {
//             id: 5, name: 'Class 5th', level: 'Primary', image: event4, description: 'Preparing for middle school.',
//         },
//         {
//             id: 6, name: 'Class 6th', level: 'Middle', image: shyam, description: 'Research projects and competitions.',
//         },
//         {
//             id: 7, name: 'Class 7th', level: 'Middle', image: event3, description: 'Coding and advanced workshops.',
//         },
//         {
//             id: 8, name: 'Class 8th', level: 'Middle', image: event4, description: 'Model UN and robotics club.',
//         },
//         {
//             id: 9, name: 'Class 9th', level: 'Secondary', image: event1, description: 'Board syllabus foundation.',
//         },
//         {
//             id: 10, name: 'Class 10th', level: 'Secondary', image: event, description: 'Board exam preparation.',
//         },
//         {
//             id: 11, name: 'Class 11th', level: 'Senior Secondary', image: shyam, description: 'Stream selection and subject depth.',
//         },
//         {
//             id: 12, name: 'Class 12th', level: 'Senior Secondary', image: event2, description: 'Final preparation for boards & college.',
//         },
//     ];

//     return (
//         <div className="container py-5">
//             <h2 className="text-center mb-5 fw-bold">Our Classes</h2>
//             <div className="row">
//                 {classData.map(cls => (
//                     <div key={cls.id} className="col-md-4 col-sm-6 mb-4">
//                         <div className="card shadow-sm h-100">
//                             <img src={cls.image} className="card-img-top" alt={cls.name} />
//                             <div className="card-body d-flex flex-column">
//                                 <h5 className="card-title">{cls.name}</h5>
//                                 <p className="text-muted mb-2"><strong>Level:</strong> {cls.level}</p>
//                                 <p className="card-text">{cls.description}</p>
//                                 <Link to={`/class/${cls.id}`} className="btn btn-primary mt-auto">
//                                     Learn More
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurClasses;
















import React from 'react';
import { Link } from 'react-router-dom';
import class1st from '../assets/class1st.webp';
import class2nd from '../assets/class2nd.jpg';
import class3rd from '../assets/class3rd.webp';
import class4th from '../assets/class4th.jpg'
import class5th from '../assets/class5th.jpg'
import class6th from '../assets/class6th.jpg'
import class7th from '../assets/class7th.webp'
import class8th from '../assets/class8th.jpg'
import class9th from '../assets/class9th.webp'
import class10th from '../assets/class10th.webp'
import class11th from '../assets/class11th.jpeg'
import class12th from '../assets/class12th.jpeg'


const classData = [
    { id: 1, name: 'Class 1st', level: 'Primary', image: class1st, description: 'Basic learning with fun activities.' },
    { id: 2, name: 'Class 2nd', level: 'Primary', image: class2nd, description: 'Advance literacy and math basics.' },
    { id: 3, name: 'Class 3rd', level: 'Primary', image: class3rd, description: 'Creative learning with field trips.' },
    { id: 4, name: 'Class 4th', level: 'Primary', image: class4th, description: 'Science projects and quizzes.' },
    { id: 5, name: 'Class 5th', level: 'Primary', image: class5th, description: 'Preparing for middle school.' },
    { id: 6, name: 'Class 6th', level: 'Middle', image: class6th, description: 'Research projects and competitions.' },
    { id: 7, name: 'Class 7th', level: 'Middle', image: class7th, description: 'Coding and advanced workshops.' },
    { id: 8, name: 'Class 8th', level: 'Middle', image: class8th, description: 'Model UN and robotics club.' },
    { id: 9, name: 'Class 9th', level: 'Secondary', image: class9th, description: 'Board syllabus foundation.' },
    { id: 10, name: 'Class 10th', level: 'Secondary', image: class10th, description: 'Board exam preparation.' },
    { id: 11, name: 'Class 11th', level: 'Senior Secondary', image: class11th, description: 'Stream selection and subject depth.' },
    { id: 12, name: 'Class 12th', level: 'Senior Secondary', image: class12th, description: 'Final preparation for boards & college.' },
];

const OurClasses = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold text-primary">Maharishi Vidya Mandir</h1>
                <h3 className="text-secondary">Explore Our Classes</h3>
                <p className="text-muted">From Primary to Senior Secondary - Empowering Excellence</p>
            </div>
            <div className="row">
                {classData.map(cls => (
                    <div key={cls.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card class-card animate__animated animate__fadeInUp h-100 shadow-sm">
                            <div className="overflow-hidden">
                                <Link to={'/details'}> <img src={cls.image} className="card-img-top class-img" alt={cls.name} /></Link>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-primary">{cls.name}</h5>
                                <span className="badge bg-info text-dark mb-2">{cls.level}</span>
                                <p className="card-text flex-grow-1">{cls.description}</p>
                                <Link to={'/details'} className="btn btn-outline-primary mt-3">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClasses;
