import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { RiContactsFill } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';

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
        <div id='contact' className=' py-4  background'>
            <div className='grid  md:grid-cols-3 lg:grid-cols-3'>
                <div className='grid  items-center'>

                    <div className='px-2 mb-10  lg:text-xl text-blue-100 '>
                        <h1 className='text-3xl mb-2' >Contact Info</h1>
                        <span className='my-2  text-black    text-[18px]'>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</span>
                        <p className='flex items-center mt-6'><RiContactsFill style={{ color: '#FF5733', fontSize: '1.5em' }} /> <span className='ml-6 '><span className='text-black'>Name</span ><p>Rafiul Hasan Rabin</p></span></p>

                        <p className='flex mt-4'><IoCall style={{ color: '#FF5733', fontSize: '1.5em' }} /> <span className='ml-6'><span className='text-black'>Call me</span><p >(+880) 1302577860</p></span></p>

                        <p className='flex mt-4'><MdEmail style={{ color: '#FF5733', fontSize: '1.5em' }} /> <span className='ml-6 '><span className='text-black'>Email</span> <p>rafiul.hasan.rabin@gmail.com</p></span></p>
                    </div>
                </div>
                <div className='contact_form mt-10'>
                    <h1 className="text-lg text-center text-white lg:mt-16">Or just write me a letter here..</h1>
                    <form ref={form} onSubmit={sendEmail} className='px-2'>

                        <label className='text-white'>Email</label>
                        <input type="email" required name="user_email" />

                        <label className='text-white'>Message</label>
                        <textarea rows={4} name="message" required />
                        <br />
                        <button type="submit" className='btn btn-primary mt-2 w-full lg:text-lg rounded' > Send Message <i className=''><FaLocationArrow style={{ fontSize: '', color: 'yellow', marginLeft: '10px' }} /></i> </button>
                    </form>
                </div>
                <div className='flex items-center ml-12'>
                    <div className='hidden md:block lg:block  text-white'>
                        <a target="_blank" href="https://github.com/RHRABIN" className='flex items-center gap-4'><BsGithub style={{ fontSize: '2rem', color: 'white', marginBottom: '8' }} /> Github </a>
                        <a target="_blank" href="https://www.linkedin.com/in/rh-rabin-8b3837223/" className='flex items-center gap-4'><AiFillLinkedin style={{ fontSize: '2rem', color: 'white', marginBottom: '8' }} />Linkdin</a>
                        <a target="_blank" href="https://facebook.com/rh.rabin.735/" className='flex items-center gap-4'><BsFacebook style={{ fontSize: '2rem', color: 'white' }} /> <span >Facebook</span> </a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Contac;