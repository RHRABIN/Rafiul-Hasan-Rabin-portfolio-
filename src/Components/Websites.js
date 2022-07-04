import React, { useEffect, useState } from 'react';
import SingleWebsites from './SingleWebsites';
import WebsiteDetailModal from './WebsiteDetailModal';

const Websites = () => {
    const [websites, setWebsites] = useState([]);
    const [modalData, setModalData] = useState(null);
    useEffect(() => {
        fetch('projects.json').then(res => res.json())
            .then(data => {
                setWebsites(data)
            })
    }, [])
    return (
        <div id='project' className='mb-10'>
            <h1 className='text-center my-16'>
                <span className="text-4xl text-secondary   border-x-4 px-4   border-pink-300" >Recent Projects</span>
            </h1>
            <div className='grid grid-cols-1 gap-1 px-2 md:px-20 lg:px-60'>
                {
                    websites.map((web, index) => <SingleWebsites key={index} web={web}
                        modalData={modalData}
                        setModalData={setModalData}
                    ></SingleWebsites>)
                }
            </div>


        </div>
    );
};

export default Websites;