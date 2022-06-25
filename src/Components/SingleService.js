import React from 'react';

const SingleService = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className="card  ">
            <figure className="px-10 pt-10">
                <img width={75} src={img} alt="Shoes" className="rounded-xl" />
            </figure>

        </div>
    );
};

export default SingleService;