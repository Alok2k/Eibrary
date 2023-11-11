import React, { useState } from 'react';
// import './sidebar.css';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/Dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/SurfEBooks",
            name: "Surf-E-Books",
            icon: <FaUserAlt />
        },
        {
            path: "/TakeQuiz",
            name: "Quiz",
            icon: <FaRegChartBar />
        }
    ];

    return (
        <div className={`container-sidebar${isOpen ? ' open' : ''}`}>
            <div className={`sidebar${isOpen ? ' open' : ''}`}>
                <div className="top_section">
                    {/* <h1 className={`logo${isOpen ? ' open' : ''}`}>E-Library</h1> */}
                    <div className="bars" onClick={toggle}>
                        <FaBars />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeClassName="active"
                    >
                        <div className="icon">{item.icon}</div>
                        <div className={`link_text${isOpen ? ' open' : ''}`}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
