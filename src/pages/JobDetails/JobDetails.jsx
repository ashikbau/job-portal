import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {title,company,category} = job;
    console.log(job)

    
    return (
        <div className='mb-10'>
            <h2 className="text-3xl">{title}</h2>
            <p>{company}</p>
            <p>{category}</p>
            <button className='btn btn-primary'>Apply Now</button>
        </div>
    );
};

export default JobDetails;