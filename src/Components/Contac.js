import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

import './Contact.css'
const Contac = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hvhtsmc', 'template_p4k3mls', form.current, 'RtwmflOpRZfM7NoQu')
            .then((result) => {
                console.log(result.text);
                alert('Your message sent!');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className=' py-10  background'>
            <div className='grid   lg:grid-cols-3 '>
                <div className='grid justify-center'>
                    <div className='lg:mt-20 mb-10 text-xl text-blue-100'>
                        <p>PHONE: <span className='ml-10'>(+880) 1302577860</span></p>
                        <p>LINKDIN: <span className='ml-8'>Rafiul Hasan Rabin</span></p>
                        <p>EMAIL: <span className='ml-12 '>rafiul.hasan.rabin@gmail.com</span></p>
                    </div>
                </div>
                <div className='contact_form'>
                    <h1 className="text-4xl text-center text-red-400">Get in touch</h1>
                    <form ref={form} onSubmit={sendEmail} className='sm:px-10'>

                        <label>Email</label>
                        <input type="email" required name="user_email" />

                        <label>Message</label>
                        <textarea name="message" required />
                        <br />
                        <input type="submit" className='btn btn-primary mt-2' value="Send Message" />
                    </form>
                </div>
                <div className='flex items-center ml-12'>
                    <div className='hidden lg:block  '>
                        <a target="_blank" href="https://github.com/RHRABIN"><BsGithub style={{ fontSize: '2rem', color: 'white', marginBottom: '8' }} /> </a>
                        <a target="_blank" href="https://www.linkedin.com/in/rh-rabin-8b3837223/"><AiFillLinkedin style={{ fontSize: '2rem', color: 'white', marginBottom: '8' }} /></a>
                        <a target="_blank" href="https://facebook.com/rh.rabin.735/"><BsFacebook style={{ fontSize: '2rem', color: 'white' }} /></a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Contac;