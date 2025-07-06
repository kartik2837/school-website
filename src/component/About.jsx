// import React from 'react';
// import ram from '../assets/ram.jpeg';

// const About = () => {
//     return (
//         <div>
//             {/* Top Call-to-Action Bar */}
//             <div className="container-fluid bg-secondary wow zoomInDown" data-wow-delay="0.1s">
//                 <div className="container">
//                     <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center p-5">
//                         <h1 className="me-4 text-white">
//                             <span className="fw-normal">Join </span>
//                             <span>Maharshi Vidya Mandir Today</span>
//                         </h1>
//                         <a href="tel:+919771329696" className="text-white fw-bold fs-2 mt-3 mt-lg-0">
//                             <i className="fa fa-phone me-1"></i> +91 9771329696
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* About Section */}
//             <div className="container-fluid py-5">
//                 <div className="container py-5">
//                     <div className="row g-5 align-items-center">
//                         <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
//                             <div className="border bg-secondary rounded">
//                                 <img src={ram} className="img-fluid w-100 rounded" alt="About School" />
//                             </div>
//                         </div>
//                         <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.3s">
//                             <h4 className="text-secondary sub-title fw-bold text-uppercase">About</h4>
//                             <h1 className="display-3 mb-4">
//                                 <strong className="text-primary">Maharshi Vidya Mandir</strong>, Building Bright Futures Since 2001
//                             </h1>
//                             <p>
//                                 Maharshi Vidya Mandir is a prestigious educational institution dedicated to academic excellence and holistic development of students. We provide a nurturing environment that blends traditional Indian values with modern teaching methodologies.
//                             </p>
//                             <p className="mb-4">
//                                 Our mission is to shape responsible citizens through disciplined learning, moral values, and creative growth. With a focus on both intellectual and character development, we aim to empower every child to achieve their highest potential.
//                             </p>
//                             <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Learn More</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Counters Section */}
//             <div className="container-fluid counter-facts py-5">
//                 <div className="container">
//                     <div className="row">
//                         {[
//                             { title: "Students Enrolled", count: 1200 },
//                             { title: "Qualified Teachers", count: 45 },
//                             { title: "Years of Excellence", count: 22 },
//                             { title: "School Branches", count: 5 }
//                         ].map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
//                                 data-wow-delay={`${0.1 + index * 0.2}s`}
//                             >
//                                 <div className="counter">
//                                     <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
//                                         <h3>{item.title}</h3>
//                                     </div>
//                                     <div className="counter-content d-flex align-items-center justify-content-center mt-4">
//                                         <span className="counter-value">{item.count}</span>
//                                         <h4 className="text-secondary mb-0" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;




import React, { useEffect } from 'react';
import counterUp from 'counterup2';
import ram from '../assets/about.png';

const About = () => {
    useEffect(() => {
        const counters = document.querySelectorAll(".counter-value");
        counters.forEach((counter) => {
            counterUp(counter, {
                duration: 2000,
                delay: 10,
            });
        });
    }, []);

    return (
        <div>
            {/* Top CTA */}
            <div className="container-fluid bg-secondary wow zoomInDown" data-wow-delay="0.1s">
                <div className="container">
                    <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center p-5">
                        <h1 className="me-4 text-white">
                            <span className="fw-normal">Join </span>
                            <span>Maharshi Vidya Mandir Today</span>
                        </h1>
                        <a href="tel:+919771329696" className="text-white fw-bold fs-2 mt-3 mt-lg-0">
                            <i className="fa fa-phone me-1"></i> +91 9950376833
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
                            <div className="border bg-secondary rounded">
                                <img src={ram} className="img-fluid w-100 rounded" alt="About School" />
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.3s">
                            <h4 className="text-secondary sub-title fw-bold text-uppercase">About</h4>
                            <h1 className="display-3 mb-4">
                                <strong className="text-primary">Maharshi Vidya Mandir</strong>, Building Bright Futures Since 2001
                            </h1>
                            <p>
                                Maharshi Vidya Mandir is a prestigious educational institution dedicated to academic excellence and holistic development of students. We provide a nurturing environment that blends traditional Indian values with modern teaching methodologies.
                            </p>
                            <p className="mb-4">
                                Our mission is to shape responsible citizens through disciplined learning, moral values, and creative growth. With a focus on both intellectual and character development, we aim to empower every child to achieve their highest potential.
                            </p>
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Counter Section */}
            <div className="container-fluid counter-facts py-5">
                <div className="container">
                    <div className="row">
                        {[
                            { title: "Students Enrolled", count: 1200 },
                            { title: "Qualified Teachers", count: 45 },
                            { title: "Years of Excellence", count: 22 },
                            { title: "School Branches", count: 5 }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="col-12 col-sm-6 col-md-6 col-xl-3 wow fadeInUp"
                                data-wow-delay={`${0.1 + index * 0.2}s`}
                            >
                                <div className="counter">
                                    <div className="counter-icon w-100 d-flex align-items-center justify-content-center">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="counter-content d-flex align-items-center justify-content-center mt-4">
                                        <span className="counter-value" style={{ fontSize: '30px', fontWeight: 'bold' }}>{item.count}</span>
                                        <h4 className="text-secondary mb-0 ms-1" style={{ fontWeight: 600, fontSize: '25px' }}>+</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
