import React from 'react';
import { FaHive } from 'react-icons/fa'
import { BsArrowReturnRight, BsArrowRight, BsServer } from 'react-icons/bs'
import WebsiteDetailModal from './WebsiteDetailModal';
import { GrTechnology } from 'react-icons/gr';
import { FcDownRight } from 'react-icons/fc';
import { DiRedis } from 'react-icons/di';


const SingleWebsites = ({ web, setModalData, modalData }) => {
    const { live, img, client, server, technology, name, service, index } = web;
    return (

        <section className='grid grid-cols-1 lg:grid-cols-2 justify-items-end'>
            <div className='border lg:w-96 border-sky-500 rounded-xl p-1'>
                <h1 className='text-center bg-orange-400 text-white rounded-xl my-1 lg:hidden'>{index}</h1>
                <div class="h-96 lg:h-[15rem]  carousel carousel-vertical rounded-box ">
                    <div class="carousel-item"

                        data-aos="zoom-in-up"
                        data-aos-duration="1500"
                    >

                        <img className='hover:scroll-auto' src={img} />

                    </div>

                </div>
                <div className='flex justify-between'>
                    <h3 className='text-xl ml-4'>{name}</h3>
                    <label for="detail-modal" onClick={() => setModalData(true)} className=' btn btn-outline btn-info btn-xs my-1 mt-2 mx-2'><span className='flex justify-center items-center gap-2 text-white'><FaHive style={{ fontSize: '1.5rem' }} /> See Details <BsArrowRight style={{ fontSize: '1.5rem', color: 'orange' }} /></span></label>
                </div>

            </div >
            <div className='ml-12'>
                <h1 className='text-2xl text-blue-400'>{name}</h1>
                <h1 className='mt-6'>{service.map(ser => <p className='flex items-center gap-6'><BsArrowReturnRight /> {ser}</p>)}</h1>
                <p className='mt-6'>{technology.map(tech => <span className='ml-4 py-2 px-4 bg-slate-400 text-black'>{tech}</span>)}</p>
                <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 '>
                    <a target="_blank" href={live} className=' btn btn-outline btn-info my-2 mx-2 lg:mt-10'><span className='flex justify-center items-center gap-2 text-white'><FcDownRight /> Live Side</span></a>

                    <a target="_blank" href={client} className=' btn btn-outline btn-info my-2 lg:mt-10  mx-2'><span className='flex justify-center items-center gap-2 text-white'><DiRedis style={{ fontSize: '1.5rem' }} /> Client Side</span></a>

                    {

                        !web?.one && <a target="_blank" href={server} className='lg:mt-10 btn btn-outline btn-info my-2 mx-2'><span className='flex justify-center items-center gap-2 text-white'><BsServer /> Server Side</span></a>

                    }
                </div>
            </div>
            {
                modalData && <WebsiteDetailModal
                    web={web}
                    setModalData={setModalData}
                ></WebsiteDetailModal>
            }
        </section>
    );
};

export default SingleWebsites;