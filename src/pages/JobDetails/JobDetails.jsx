import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    const {_id,title,company,category,applicationDeadline} = job;
    console.log(_id)

    
    return (
        <div className='mb-10'>
            <p>You are applying for the following position</p>
            <h2 className="text-3xl">{title}</h2>
            <p>{company}</p>
            <p>{category}</p>
            <p>{applicationDeadline}</p>
        <Link to={`/jobApply/${_id}`}><button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;