import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';
import Typical from 'react-typical'
import { ScrollContainer, ScrollPage, Animator, Sticky, batch, Fade, MoveOut } from 'react-scroll-motion';
import Header from './Header';

const Heading = () => {
    return (
        <div className='relative'>


            <div className="hero  min-h-[calc(100vh-200px)] bg-base-200" style={{ backgroundImage: `url(https://i.ibb.co/tZTbJdn/Dark-Web-1-png.jpg)` }}>

                <div className='hero-overlay bg-opacity-60 '>
                </div>
                <div>
                    <div className='absolute top-0  lg:left-[40%]  md:left-[40%] sm:left-0'>
                        <Header></Header>
                    </div>

                    <div>
                        <div>
                            <div className="hero-content flex-col lg:flex-row-reverse ">

                                <div className='text-center'>
                                    <h1 className="text-5xl font-bold text-white">
                                        Rafiul Hasan Rabin</h1>
                                    {/* <p className="py-6 text-xl">Full Stack Web Developer</p> */}
                                    <div className='my-6 text-xl font-serif text-yellow-400'>
                                        <Typical
                                            steps={['Full Stack Web Developer', 2000, 'Junior React Developer', 2000,]}
                                            loop={Infinity}
                                            wrapper="p"

                                        />

                                    </div>

                                    <div className='flex justify-center gap-4 mb-6 text-cyan-100'>

                                        <a target="_blank" href="https://github.com/RHRABIN"> <BsGithub style={{ fontSize: '2rem', color: '' }} /></a>
                                        <a target="_blank" href="https://facebook.com/rh.rabin.735/"><BsFacebook style={{ fontSize: '2rem', color: '' }} /></a>
                                        <a target="_blank" href="https://www.linkedin.com/in/rh-rabin-8b3837223/"><AiFillLinkedin style={{ fontSize: '2rem', color: '' }} /></a>
                                    </div>
                                    <a target='blank' href='https://drive.google.com/file/d/1ASt308_0fCuz5AI17W_2_LtRbEpvIVA5/view?usp=sharing' className="btn btn-primary text-xl px-6 py-2"> <span className='flex justiy-center items-center gap-2'><FaRegAddressCard style={{ fontSize: '1.3em' }} /> My Resume</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;