import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-8 text-center text-gray-500 text-xs font-medium tracking-wide opacity-60 hover:opacity-100 transition-opacity">
            <p>&copy; {new Date().getFullYear()} MR PATRA all rights reserved</p>
        </footer>
    );
};

export default Footer;
