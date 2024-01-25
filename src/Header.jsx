import React, {useState} from 'react';
import './Header.css';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <>
            <nav className="navbar">
                <div className='header'>
                        <h1><center>Keep Notes</center></h1>
                        <Button className='dark-mode-btn' onClick={toggleDarkMode}>
                            {darkMode ? <LightModeIcon /> : <DarkModeIcon /> }
                        </Button>
                </div>
            </nav>
        </>
    );
};

export default Header;