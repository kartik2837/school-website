import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faEnvelope,
    faMapMarkerAlt,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4 wow fadeInDown" data-wow-delay="0.2s">
                <FontAwesomeIcon icon={faPaperPlane} className="me-2 text-primary" />
                <strong>Contact Us</strong>
            </h2>

            {/* Contact Details */}
            <div className="row text-center mb-5">
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                    <FontAwesomeIcon icon={faPhone} size="2x" className="text-success mb-2" />
                    <h5><strong>Phone</strong></h5>
                    <p>+91 9950376833</p>
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-danger mb-2" />
                    <h5><strong>Email</strong></h5>
                    <p>Maharshischoolbehror.com</p>
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.7s">
                    <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="text-primary mb-2" />
                    <h5><strong>Address</strong></h5>
                    <p>Maharishi Vidya Mandir, Nangal Chaudhary Road Bus Stand Gadoj (Behror) India</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="row justify-content-center wow fadeInUp" data-wow-delay="0.9s">
                <div className="col-md-8">
                    <h4 className="mb-3"><strong>Send Us a Message</strong></h4>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                            <input type="text" className="form-control" id="name" placeholder="Your full name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Type your message..." required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary px-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
