import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer class="footer flex justify-center items-center p-4  text-neutral-content px-10 mt-20">
            <div>

                <p className='text-xl'>Copyright © <span>{new Date().getFullYear()}</span> - All right reserved</p>
            </div>
            <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end ml-10 lg:hidden ">
                <a target="_blank" href="https://github.com/RHRABIN">
                    <BsGithub style={{ fontSize: '2rem' }} />
                </a>
                <a target="_blank" href="https://facebook.com/rh.rabin.735/">
                    <BsFacebook style={{ fontSize: '2rem' }} />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/rh-rabin-8b3837223/">
                    <AiFillLinkedin style={{ fontSize: '2rem', }} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;