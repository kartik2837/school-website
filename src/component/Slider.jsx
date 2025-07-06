import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import akashji from '../assets/akashji.png'
import raju from '../assets/raju.jpeg'

const Slider = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        items: 1,
        dots: true,
        navText: ["<", ">"]
    };

    return (
        <OwlCarousel className="owl-theme" {...options}>
            {/* Slide 1 */}
            <div className="item">
                <img src={raju} className="img-fluid w-100 h-100" alt="Slide" />
                <div className="carousel-caption">
                    <div className="carousel-caption-content p-3" style={{ maxWidth: '900px' }}>
                        <h4 className="text-secondary text-uppercase sub-title fw-bold mb-4" style={{ letterSpacing: '3px' }}></h4>
                        <h1 className="display-1 text-capitalize text-white mb-4"></h1>
                        <p className="fs-5"></p>
                        {/* <div className="pt-2">
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5 m-2" href="#"></a>
                            <a className="btn btn-secondary rounded-pill text-white py-3 px-5 m-2" href="#"></a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Slide 2 */}
            <div className="item">
                <img src={akashji} className="img-fluid w-100" alt="Slide" />
                <div className="carousel-caption">
                    <div className="carousel-caption-content p-3" style={{ maxWidth: '900px' }}>
                        <h4 className="text-secondary text-uppercase sub-title fw-bold mb-4" style={{ letterSpacing: '3px' }}></h4>
                        <h1 className="display-1 text-capitalize text-white mb-4"></h1>
                        <p className="fs-5"></p>
                        {/* <div className="pt-2">
                            <a className="btn btn-primary rounded-pill text-white py-3 px-5 m-2" href="#"></a>
                            <a className="btn btn-secondary rounded-pill text-white py-3 px-5 m-2" href="#"></a>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Add more slides as needed */}
        </OwlCarousel>
    );
};

export default Slider;
