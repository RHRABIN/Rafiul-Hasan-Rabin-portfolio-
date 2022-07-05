import React from 'react';
import { BiCodeAlt } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { IoServer } from 'react-icons/io5';
import './service.css'
const Service = () => {


    return (
        <div style={{ backgroundColor: '#111', color: '#fff' }} className=' h-[80vh] '>
            <h1 className='text-center pt-10 mb-16'>
                <h1 className='text-4xl text-center text-white title relative mb-30 pb-8 font-mono'>My  Services</h1>

            </h1>
            <div className='px-2 md:px-20 lg:px-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
            >

                <section style={{ backgroundColor: '#222' }} class="card card-main   shadow-2xl "
                    data-aos="fade-left"
                    data-aos-duration="1500"

                >
                    <div className='card-transition'>
                        <figure class="px-10 pt-10"
                        >
                            <FaReact style={{ fontSize: '2.5em', color: 'crimson' }} />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="text-2xl font-bold">React Developer</h2>
                            <p>I am a React Developer. I have also created many single page application using React js. I can be your React Developer.</p>

                        </div>
                    </div>
                </section>
                <section style={{ backgroundColor: '#222' }} class="card  shadow-2xl "
                    data-aos="fade-up"
                    data-aos-duration="1500">
                    <figure class="px-10 pt-10"

                    >
                        <BiCodeAlt style={{ fontSize: '2.5em', color: 'crimson' }} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="text-2xl text-primary">Full Stack Web Developer</h2>
                        <p>I am a Full Stack Web Developer. I have also complete 5+ full stack projects using React js, JavaScript, Node js and Mongo DB. I can be your Full Stack Developer</p>
                        .
                    </div>
                </section>
                <section style={{ backgroundColor: '#222' }} class="card   shadow-2xl"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    <figure class="px-10 pt-10 ">
                        <IoServer style={{ fontSize: '2.5em', color: 'crimson' }} />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="text-2xl text-primary">Backend Developer</h2>
                        <p>I am a Node JS Developer. I have also created many Project server side Api Endpoint using Node js and Mongo DB. I can be your BackEnd Developer..</p>

                    </div>
                </section>

            </div>

        </div>
    );
};

export default Service;