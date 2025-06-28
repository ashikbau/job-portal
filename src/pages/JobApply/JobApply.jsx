import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    // console.log(user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkedIn,github,resume)

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            github,
            resume
        }

        fetch('http://localhost:5000/job-applications', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobApplication)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "error",
                        title: "WOW... ",
                        text: "Thanks For Your Job Applications",
                        footer: '<a href="#">Good Luck</a>'
                    });
                    navigate('/myApplications')
                
                }
            })

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">


                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold text-center">Apply now!</h1>
                    <form onSubmit={submitJobApplication} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn Url</span>
                            </label>
                            <input type="url" name='linkedIn' placeholder="LinkedIn" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github Url</span>
                            </label>
                            <input type="url" name='github' placeholder="Github Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume Url</span>
                            </label>
                            <input type="url" name='resume' placeholder="Resume Url" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;