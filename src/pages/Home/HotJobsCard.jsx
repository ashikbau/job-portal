import { LiaMapMarkerAltSolid } from "react-icons/lia";

const HotJobsCard = ({ job }) => {
    const { title, company, company_logo, requirements, description, location, salaryRange } = job;
    return (
        <div className="card card-compact bg-base-100  shadow-xl">
            <figure className="flex gap-2 m-2">
                <img 
                className="w-16"
                    src={company_logo}
                    alt="Shoes" />
                    <div>
                        <h2>{company}</h2>
                      <div className="flex items-center gap-2"> 
                        <p><LiaMapMarkerAltSolid /></p> 
                        <p>{location}</p>
                        </div>
                    </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                <p>{description}</p>
                <div className="flex gap-2 felx-wrap">
                    {
                        requirements.map(skill=><p className="border rounded-lg text-center px-2 hover:text-blue-300">{skill}</p>)
                    }
                </div>
                <div className="card-actions justify-end">
               <p>salary : {salaryRange.min} - {salaryRange.max}{salaryRange.currency}</p>
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default HotJobsCard;