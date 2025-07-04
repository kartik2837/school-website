// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';


// const Navbar = () => {
//     return (
//         <div className="container-fluid position-relative p-0">
//             <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
//                 <Link to="/" className="navbar-brand p-0 d-flex align-items-center">
//                     <img src={logo} alt="MVM Logo" className="school-logo animated-logo" />
//                     <h1 className="school-name-animated text-danger fs-3 m-0 ms-2 d-none d-md-block">
//                         Maharshi Vidya Mandir
//                     </h1>

//                 </Link>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarCollapse"
//                 >
//                     <span className="fa fa-bars"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarCollapse">
//                     <div className="navbar-nav ms-auto py-0">
//                         <Link to="/" className="nav-item nav-link active">Home</Link>
//                         <Link to="/about" className="nav-item nav-link">About</Link>
//                         <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
//                         <Link to="/video" className="nav-item nav-link">Our Video</Link>
//                         {/* <Link to="/event" className="nav-item nav-link">Classes</Link> */}
//                         {/* <Link to="/blog" className="nav-item nav-link">Blogs</Link> */}
//                         <div className="nav-item dropdown">
//                             <a
//                                 href="#"
//                                 className="nav-link dropdown-toggle"
//                                 data-bs-toggle="dropdown"
//                             >
//                                 Our Classes
//                             </a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={'/ourclasses'} className="dropdown-item">Classes</Link>
//                                 {/* <Link to="/training" className="dropdown-item">All Teacher</Link>
//                                 <Link to="/team" className="dropdown-item">Our Event</Link>
//                                 <Link to="/testimonial" className="dropdown-item">Play Ground</Link>
//                                 <Link to="/gallery" className="dropdown-item">Our Gallery</Link> */}

//                             </div>
//                         </div>
//                         <Link to="/contact" className="nav-item nav-link">Contact Us</Link>
//                     </div>
//                     <div className="d-flex ms-3 gap-2">
//                         <Link
//                             to="/ourclasses"
//                             className="btn btn-outline-primary rounded-pill py-2 px-4"
//                         >
//                             More Classes
//                         </Link>
//                         <Link
//                             to="/contact"
//                             className="btn btn-primary rounded-pill text-white py-2 px-4"
//                         >
//                             Contact Us
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="container-fluid position-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0 shadow-sm">
                <Link to="/" className="navbar-brand p-0 d-flex align-items-center" onClick={closeMenu}>
                    <img src={logo} alt="MVM Logo" className="school-logo me-2" style={{ height: '40px' }} />
                    <h1 className="text-danger fs-4 m-0 d-none d-md-block">
                        Maharishi Vidya Mandir
                    </h1>
                </Link>

                {/* Hamburger Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}
                    id="navbarCollapse"
                >
                    <div className="navbar-nav ms-auto py-0">
                        <Link to="/" className="nav-item nav-link" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="nav-item nav-link" onClick={closeMenu}>About</Link>
                        <Link to="/gallery" className="nav-item nav-link" onClick={closeMenu}>Gallery</Link>
                        <Link to="/video" className="nav-item nav-link" onClick={closeMenu}>Our Video</Link>

                        {/* Dropdown for Classes */}
                        <div
                            className={`nav-item dropdown${isDropdownOpen ? ' show' : ''}`}
                            onClick={toggleDropdown}
                        >
                            <span
                                className="nav-link dropdown-toggle"
                                role="button"
                                aria-expanded={isDropdownOpen}
                            >
                                Our Classes
                            </span>
                            <div className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}>
                                <Link
                                    to="/ourclasses"
                                    className="dropdown-item"
                                    onClick={closeMenu}
                                >
                                    Classes
                                </Link>
                            </div>
                        </div>

                        <Link to="/contact" className="nav-item nav-link" onClick={closeMenu}>Contact Us</Link>
                    </div>

                    {/* Optional Buttons */}
                    <div className="d-flex ms-3 gap-2">
                        <Link
                            to="/ourclasses"
                            className="btn btn-outline-primary rounded-pill px-3"
                            onClick={closeMenu}
                        >
                            More Classes
                        </Link>
                        <Link
                            to="/contact"
                            className="btn btn-primary rounded-pill text-white px-3"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
