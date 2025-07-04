import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from '../component/Slider';
import About from '../component/About';
import Dance from '../component/Dance';
import Blog from '../component/Blog';
import Event from '../component/Event';
import Team from '../component/Team';


const Home = () => {
    return (
        <div>



            <div className='mt-5'>
                <Slider />
            </div>
            <About />
            <Dance />
            <Event />
            <Team />
            <Blog />


        </div>
    )
}

export default Home
