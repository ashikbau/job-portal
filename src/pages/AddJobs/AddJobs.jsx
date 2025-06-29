
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const AddJobs = () => {
    const {user} = useAuth();
    const navigate = useNavigate();


    const handleAddJob = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());


        const { min, max, currency, ...newJob } = initialData;
        // console.log(newJob)
        newJob.salarryRange = { min, max, currency };
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')


        console.log(newJob)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "error",
                        title: "WOW... ",
                        text: "Successfully Added A Job",
                        footer: '<a href="#">Good Luck</a>'
                    });
                    navigate('/myPosteJobs')

                }
            })
    }




    return (
        <div>


            <h2 className="3xl text-center">Post A new Job</h2>
            <form onSubmit={handleAddJob} className="card-body w-full">
                {/* Job Title */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" required />
                </div>

                {/* Job Location */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Job Location" className="input input-bordered w-full" required />
                </div>

                {/* Job Type */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select name="job_type" defaultValue="" className="select select-ghost w-full" required>
                        <option value="" disabled>Pick A Job Type</option>
                        <option value="Full time">Full time</option>
                        <option value="Intern">Intern</option>
                        <option value="Part-Time">Part-Time</option>
                    </select>
                </div>

                {/* Job Field */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select name="job_field" defaultValue="" className="select select-ghost w-full" required>
                        <option value="" disabled>Pick A Job Field</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Biology">Biology</option>
                        <option value="Teaching">Teaching</option>
                    </select>
                </div>

                {/* Salary Range */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Max</span>
                        </label>
                        <input type="text" name="max" placeholder="Max" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Min</span>
                        </label>
                        <input type="text" name="min" placeholder="Min" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Currency</span>
                        </label>
                        <select name="currency" defaultValue="" className="select select-ghost w-full" required>
                            <option value="" disabled>Pick A Currency</option>
                            <option value="Bdt">Bdt</option>
                            <option value="Dollar">Dollar</option>
                            <option value="Euro">Euro</option>
                            <option value="Pound">Pound</option>
                            <option value="INR">INR</option>
                        </select>
                    </div>
                </div>

                {/* Job Description */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-primary w-full" placeholder="Job Description" required></textarea>
                </div>

                {/* Company Name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name="company" placeholder="Company Name" className="input input-bordered w-full" required />
                </div>

                {/* Requirements */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Put Each requirement on a new line</span>
                    </label>
                    <textarea name="requirements" className="textarea textarea-primary w-full" placeholder="Job Requirements"></textarea>
                </div>

                {/* Responsibilities */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Put Each responsibility on a new line</span>
                    </label>
                    <textarea name="responsibilities" className="textarea textarea-primary w-full" placeholder="Job Responsibilities"></textarea>
                </div>

                {/* HR Name */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name="hr_name" placeholder="HR Name" className="input input-bordered w-full" required />
                </div>
                {/* aplicationdeadline */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Application Deadline</span>
                    </label>
                    <input type="date" name="applicationDeadline" placeholder="Application Deadline" className="input input-bordered w-full" required />
                </div>

                {/* HR Email */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} name="hr_email" placeholder="HR Email" className="input input-bordered w-full" required />
                </div>

                {/* Company Logo */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="url" name="company_logo" placeholder="Company Logo URL" className="input input-bordered w-full" required />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary w-full">Post Job</button>
                </div>
            </form>


        </div>
    );
};

export default AddJobs;