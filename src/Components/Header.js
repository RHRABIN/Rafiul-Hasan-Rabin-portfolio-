import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {



    return (
        <div>
            <div className="navbar md:text-cyan-100 lg:text-cyan-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost md:hidden lg:hidden text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='#about'>About me</a></li>
                            <li tabindex="0">
                                <a href='#project'>
                                    Project
                                </a>

                            </li>
                            <li><a href='#contact'>Contact me</a></li>

                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden md:flex lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='#about'>About me</a></li>
                        <li tabindex="0">
                            <a href='#project'>
                                Project

                            </a>

                        </li>
                        <li><a href='#contact'>Contact me</a></li>



                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Get started</a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;