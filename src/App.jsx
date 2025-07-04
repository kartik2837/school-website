
import { Routes, Route } from 'react-router-dom';
import Home from './innerpages/Home';
import Abouts from './innerpages/Abouts';
import Topbar from './component/Topbar'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Contact from './innerpages/Contact';
import Gallery from './innerpages/Gallery';

import 'animate.css/animate.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import './App.css';
import Video from './innerpages/Video';
import OurClasses from './innerpages/OurClasses';
import Details from './innerpages/Details';




function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>

      <div>
        <Topbar />
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/video' element={<Video />} />
          <Route path='/ourclasses' element={<OurClasses />} />
          <Route path='/details' element={<Details />} />


        </Routes>

        <br />


        <a
          href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20know%20more%20about%20your%20dance%20classes"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            style={{ width: '100%', height: '100%' }}
          />
        </a>
        <Footer />
      </div>






    </>

  );
}

export default App;
