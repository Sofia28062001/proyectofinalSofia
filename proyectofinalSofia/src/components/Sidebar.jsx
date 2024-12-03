import React from 'react';
import './Sidebar.css';

function Sidebar ({ onMenuClick }) {
    return (
        <aside className="sidebar">


            <nav className="menu">
                <button className="menu-button" onClick={() => onMenuClick('citas')}>
                    CITAS
                </button>
                <button className="menu-button" onClick={() => onMenuClick('recetas')}>
                    RECETAS
                </button>
                <button className="menu-button" onClick={() => onMenuClick('medicamentos')}>
                    MEDICAMENTOS
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
