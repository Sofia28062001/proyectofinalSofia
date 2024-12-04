import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';
import Navbar from './components/Navbar';

function App ()  {
    const [activeSection, setActiveSection] = useState('citas'); // Por defecto, "citas"

    const handleMenuClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
        <div className="container">
          <Navbar/>
            <Sidebar onMenuClick={handleMenuClick} />
            <MainContent activeSection={activeSection} />
        </div>
        </>
    );
};

export default App;
