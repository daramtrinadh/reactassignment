import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import './index.css';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="header">
            <div className="logo">
                <button type="button" className="menu-btn" onClick={toggleDrawer}>
                    <IoIosMenu fontSize={30} color="#36167c" />
                </button>
                <h3 className="brand-name">IndigoLearn</h3>
            </div>
            {isDrawerOpen && (
                <div className="drawer-backdrop" onClick={toggleDrawer}>
                    <div className="side-drawer" onClick={e => e.stopPropagation()}>
                        <div className="drawer-header">
                            <span className="drawer-close" onClick={toggleDrawer}>&times;</span>
                        </div>
                        <div className="drawer-content">
                            <h1>Indigo Learn</h1>
                            <h3>Login</h3>
                        </div>
                    </div>
                </div>
            )}
            <div className='btn-div'>
                <button className='btns'>Buy Courses</button>
                <button className='btns'>Programs</button>
                <button className='btns'>Free Courses</button>
            </div>
            <div className="login">
                <CgProfile fontSize={20} className='profile-icon'/>
                <h4 className='login-text'>Login/Signup</h4>
            </div>
        </div>
    );
};

export default Header;
