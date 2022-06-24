import React from 'react';

const SingleService = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div class="card  ">
            <figure class="px-10 pt-10">
                <img width={75} src={img} alt="Shoes" class="rounded-xl" />
            </figure>

        </div>
    );
};

export default SingleService;