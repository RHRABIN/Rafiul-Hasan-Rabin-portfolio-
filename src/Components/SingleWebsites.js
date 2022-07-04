import React from 'react';
import { BsArrowReturnRight, BsGithub, BsServer } from 'react-icons/bs'
import WebsiteDetailModal from './WebsiteDetailModal';
import { TbSquareRotated, TbWorld } from 'react-icons/tb';



const SingleWebsites = ({ web, setModalData, modalData }) => {
    const { live, img, client, server, technology, name, service, index } = web;
    return (

        <section className='flex  flex-col md:flex-row lg:flex-row mb-4'>
            <div className='mb-6 '>
                <div className='border shadow-2xl md:w-80 lg:w-96 border-sky-500 rounded-xl p-1' >
                    <h1 className='text-center bg-orange-400 text-white rounded-xl my-1 lg:hidden'>{index}</h1>
                    <div className="h-96 lg:h-[24rem]  carousel carousel-vertical rounded-box ">
                        <div className="carousel-item"

                            data-aos="zoom-in-up"
                            data-aos-duration="1500"
                        >

                            <img className='hover:scroll-auto' src={img} alt='images' />

                        </div>

                    </div>


                </div >
            </div>
            <div className='md:ml-4 lg:ml-12 '
                data-aos="fade-up"
                data-aos-duration="1500"
                delay="100"
            >
                <h1 className='flex justify-items-center gap-4 items-center mt-0 lg:mt-4'

                > <span style={{ color: '#6f40b2' }} className='text-2xl'>❖ {name}</span></h1>

                <h1 className='mt-6'>{service.map(ser => <p className='flex items-center mb-4'><BsArrowReturnRight style={{ fontSize: '1.2em' }} /> <span className='ml-4 text-sm lg:text-lg'>{ser}</span></p>)}</h1>

                <div className='mt-6'>{technology.map(tech => <p className='mb-1 ml-1 inline-block lg:ml-2 py-1 lg:py-1 px-1 lg:px-3 bg-slate-200 text-black shadow '># {tech}</p>)}
                </div>

                <div className='flex flex-wrap justify-center lg:justify-start items-center mt-4'>
                    <a


                        target="_blank" href={live} className=' btn btn-outline btn-info lg:border-0 my-2 mx-2 lg:mt-6'><span className='flex justify-center items-center gap-2 '><TbWorld style={{ fontSize: '1.5em' }} /> <span className='hidden  lg:block font-mono text-lg'>Live Side</span> </span>
                    </a>

                    <a target="_blank" href={client} className=' btn btn-outline btn-info lg:border-0 lg:mt-6  mx-2'><span className='flex justify-center items-center gap-2 '><BsGithub style={{ fontSize: '1.5rem' }} /> <span className='hidden  lg:block font-mono text-lg'>Client Side</span> </span>
                    </a>

                    {

                        !web?.one && <a target="_blank" href={server} className='lg:mt-6 btn btn-outline btn-info lg:border-0 my-2 mx-2'><span className='flex justify-center items-center gap-2 '><BsServer style={{ fontSize: '1.5em' }} /> <span className='hidden  lg:block font-mono text-lg'>Server Side</span></span>
                        </a>

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