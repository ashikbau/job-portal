import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data)

      })
  }, [user.email])
  

  return (
    <div>
      <h2>Here are my applications {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Job Title</th>
              <th>Location</th>
              <th>Application Deadline</th>
              <th></th>
            </tr>
          </thead>
          <tbody>



            {
              jobs.map(job => <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>

                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">{job.location}</span>
                </td>
                <td>{job.applicationDeadline}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">X</button>
                </th>
              </tr>)
            }


          </tbody>

        </table>
      </div>

    </div>
  );
};

export default MyApplications;