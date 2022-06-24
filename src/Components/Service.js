import React, { useState, useEffect } from 'react';
import SingleService from './SingleService';
import { GrReactjs } from 'react-icons/gr';
import { TbBrandJavascript } from 'react-icons/tb';
import { ImHtmlFive } from 'react-icons/im';
import { IoLogoCss3 } from 'react-icons/io';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);

    return (
        <div>
            <h1 className='text-4xl text-center my-10 text-orange-400'>My Awesome Services</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-items-center sm:px-2 lg:px-96'>
                {/* {
                    services?.map(service => <SingleService key={service._id} service={service}></SingleService>)
                } */}
                <GrReactjs style={{ fontSize: '3.5rem', color: 'cyan' }} />
                <TbBrandJavascript style={{ fontSize: '3.5rem', color: 'yellow' }} />
                <ImHtmlFive style={{ fontSize: '3.5rem', color: 'tomato' }} />
                <DiNodejs style={{ fontSize: '5.5rem', color: 'green' }} />
                <IoLogoCss3 style={{ fontSize: '3.5rem', color: 'blue' }} />
                <SiMongodb style={{ fontSize: '3.5rem', color: 'green' }} />
                <SiTailwindcss style={{ fontSize: '3.5rem', color: 'cyan' }} />
                <SiFirebase style={{ fontSize: '3.5rem', color: 'yellow' }} />
            </div>
        </div>
    );
};

export default Service;