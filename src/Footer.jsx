import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='footer'>
                <h3><center>©️ Copyright {year}</center></h3>
            </footer>
        </>
    );
};

export default Footer;