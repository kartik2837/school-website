import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        {/* About */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <img src={logo} height={60} width={60} alt="MVM Logo" className="school-logo animated-logo" />
                                <h1 className="school-name-animated text-danger fs-3 m-0 ms-2 d-none d-md-block">
                                    Maharshi Vidya Mandir
                                </h1>
                                <p className="text-white mb-3">
                                    Maharshi Vidya Mandir (MVM) is a progressive, value-based CBSE school committed to blending academic excellence with traditional Indian values.
                                </p>
                                <div className="d-flex">
                                    <a
                                        href="https://www.facebook.com/YourPageName"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-lg-square btn-primary rounded-circle me-2"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        href="https://twitter.com/YourProfile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-lg-square btn-primary rounded-circle mx-2"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/YourProfile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-lg-square btn-primary rounded-circle mx-2"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/YourProfile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-lg-square btn-primary rounded-circle mx-2"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* Address */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Address</h4>
                                <div className="d-flex align-items-center mb-3">
                                    <a className="btn btn-lg-square rounded-circle mx-2" href="#"><i className="fas fa-map-marker-alt"></i></a>
                                    <div className="text-white ms-2">
                                        <p className="mb-0">Nangal Chaudhary Road Bus Stand Gadoj (Behror)</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <a className="btn btn-lg-square  rounded-circle mx-2" href="#"><i className="fa fa-phone-alt"></i></a>
                                    <div className="text-white ms-2">
                                        <p className="mb-0">+91 9950376833</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-lg-square  rounded-circle mx-2" href="#"><i className="fas fa-envelope"></i></a>
                                    <div className="text-white ms-2">
                                        <p className="mb-0">Maharshischoolbehror.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Quick Links</h4>
                                <Link to={'/abouts'} className="footer-link"> About Us</Link>
                                <Link to={'/ourclasses'} className="footer-link"> Classes</Link>
                                <a href="#" className="footer-link"> Privacy Policy</a>
                                <a href="#" className="footer-link"> Terms & Conditions</a>
                                <a href="#" className="footer-link"> Schedule</a>
                                <a href="#" className="footer-link"> FAQ</a>
                                <Link to={'/cotact'} className="footer-link"> Contact Us</Link>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="footer-item d-flex flex-column">
                                <h4 className="text-white mb-4">Newsletter</h4>
                                <p className="text-white mb-3">
                                    Join the official Maharshi Vidya Mandir Newsletter to receive regular updates about school announcements, academic calendars, upcoming events, student achievements, holiday notices.
                                </p>
                                <div className="position-relative mx-auto rounded-pill">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

            {/* Contact Action Icons */}
            <div className="container-fluid bg-dark py-3">
                <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
                    {/* Call */}
                    <a href="tel:+919950376833" className="d-flex align-items-center text-white text-decoration-none mb-3 mb-md-0">
                        <i className="fas fa-phone-alt fa-lg me-2 text-primary"></i>
                        <span>+91 9950376833</span>
                    </a>

                    {/* Message */}
                    <a href="mailto:maharshischoolbehror.com" className="d-flex align-items-center text-white text-decoration-none mb-3 mb-md-0">
                        <i className="fas fa-envelope fa-lg me-2 text-primary"></i>
                        <span>maharshischoolbehror.com</span>
                    </a>

                    {/* Map */}
                    <a href="https://www.google.com/maps?q=Maharshi+Vidya+Mandir+Gadoj+Behror" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-white text-decoration-none">
                        <i className="fas fa-map-marker-alt fa-lg me-2 text-primary"></i>
                        <span>View on Google Map</span>
                    </a>
                </div>
            </div>

            {/* Copyright Start */}
            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-md-0">
                            <span className="text-white">
                                <a href="#" className="border-bottom text-white">
                                    <i className="fas fa-copyright text-light me-2"></i>
                                    2025
                                </a> All right reserved.
                            </span>
                        </div>
                        <div className="col-md-6 text-center text-md-end text-white">
                            Designed By <a className="border-bottom text-white" href="https://web4businesssolutions.com/">Web4Businesssolutions</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>
        </>
    );
};

export default Footer;
