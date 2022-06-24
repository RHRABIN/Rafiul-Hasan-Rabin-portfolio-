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
            <h1 className="text-4xl py-10 text-center">Recent Projects</h1>
            <div className='grid grid-cols-1 gap-10 justify-items-center'>
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