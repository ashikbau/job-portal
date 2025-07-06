import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const ViewApplications = () => {
    const applications = useLoaderData();
    console.log(applications)

    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications?.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Job Id</th>
                            
                            <th>Remove Applicaton</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            applications.map(app => <tr key={app._id}>
                                <td>{app.
                                    applicant_email
                                }</td>
                                <td>{app.job_id}</td>
                                <td>
                                    <button className="btn btn-secondary">
                                        Delete

                                    </button>
                                </td>
                            </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewApplications;