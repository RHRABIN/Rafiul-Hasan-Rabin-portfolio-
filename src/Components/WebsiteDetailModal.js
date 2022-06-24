import React from 'react';
import { BsServer } from 'react-icons/bs';
import { DiRedis } from 'react-icons/di';
import { FcDownRight } from 'react-icons/fc';
const WebsiteDetailModal = ({ web, setModalData }) => {
    const { name, client, server, live, service, technology } = web;
    return (
        <div >
            <input type="checkbox" id="detail-modal" class="modal-toggle" />
            <div class="modal modal-middle sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-xl text-center text-orange-400 border-b">{name}</h3>


                    <div className='text-center mt-4'>
                        <p><span className='font-bold'>Overview:</span> {service}</p>
                        <h3 className='text-bold textl-xl text-orange-300 mt-4'>Technology: {technology}</h3>
                        <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 '>
                            <a target="_blank" href={live} className=' btn btn-outline btn-info my-2 mx-2 lg:mt-10'><span className='flex justify-center items-center gap-2 text-white'><FcDownRight /> Live Side</span></a>

                            <a target="_blank" href={client} className=' btn btn-outline btn-info my-2 lg:mt-10  mx-2'><span className='flex justify-center items-center gap-2 text-white'><DiRedis style={{ fontSize: '1.5rem' }} /> Client Side</span></a>

                            {

                                !web?.one && <a target="_blank" href={server} className='lg:mt-10 btn btn-outline btn-info my-2 mx-2'><span className='flex justify-center items-center gap-2 text-white'><BsServer /> Server Side</span></a>

                            }
                        </div>
                    </div>
                    <div class="modal-action">
                        <label for="detail-modal" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default WebsiteDetailModal;