import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <footer className="footer flex justify-center items-center flex-col gap-2  text-neutral-content px-2 lg:px-10 mt-10">
            <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end  lg:hidden ">
                <a target="_blank" href="https://github.com/RHRABIN">
                    <BsGithub />
                </a>
                <a target="_blank" href="https://facebook.com/rh.rabin.735/">
                    <BsFacebook />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/rh-rabin-8b3837223/">
                    <AiFillLinkedin />
                </a>
            </div>
            <div>
                <ScrollToTop smooth color="#6f00ff" />

                <p className='sm:text-sm lg:text-xl'>Copyright © <span>{new Date().getFullYear()}</span> - All right reserved</p>
            </div>

        </footer>
    );
};

export default Footer;