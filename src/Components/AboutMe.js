import React from 'react';



const AboutMe = () => {
    return (


        <div className=" grid lg:grid-cols-2  lg:px-48 my-10">

            <div className='px-2 lg:ml-10 mt-10'>
                <div
                    data-aos="zoom-in-up"
                    data-aos-duration="1000"
                >

                    <h1 className="text-5xl font-bold">About Me!</h1>
                    <p className="py-6  text-sm  md:text-lg lg:text-lg">I am Rafiul Hasan Rabin.I completed diploma in engineering at computer technology from Sylhet Polytechnic Institute. Now i am finding a job for junior web developer. If you want so please contact me</p>
                    <a href='#contact' className="btn btn-primary">Contact Me</a>

                </div>




            </div>
            <div className="ml-4 mt-6 lg:ml-40 ">
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                >

                    <img src="https://i.ibb.co/VJ7Pqc9/rabin.png" className="max-w-sm rounded-lg shadow-2xl " />
                </div>
            </div>




        </div>



    );
};

export default AboutMe;