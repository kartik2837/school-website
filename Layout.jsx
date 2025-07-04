// components/Layout.js
import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
