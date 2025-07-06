import React from 'react';

const Topbar = () => {
    return (
        <div>
            <div className="container-fluid bg-secondary px-5 d-none d-lg-block">
                <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
                    <div className="col-lg-8 text-center text-lg-start mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a href="#" className="text-light me-4">
                                <i className="fas fa-map-marker-alt text-primary me-2"></i>
                                Find A Location
                            </a>
                            <a href="#" className="text-light me-4">
                                <i className="fas fa-phone-alt text-primary me-2"></i>
                                +91 9950376833
                            </a>
                            <a href="#" className="text-light me-0">
                                <i className="fas fa-envelope text-primary me-2"></i>
                                Maharshischoolbehror.com
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-flex justify-content-end">
                            <div className="border-end border-start py-1">
                                <a href="https://www.facebook.com/" className="btn text-primary">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="border-end py-1">
                                <a href="https://x.com/i/flow/login?lang=en" className="btn text-primary">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="border-end py-1">
                                <a href="https://www.instagram.com/" className="btn text-primary">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div className="border-end py-1">
                                <a href="https://www.linkedin.com/" className="btn text-primary">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;
