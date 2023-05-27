import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const SingleService = () => {
  const [services, setServices] = useState([]);
  const [asc,setAsc]=useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/services?sort=${asc? 'asc':'desc'}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc]);

  return (
    <div className="mt-4 mb-4">
      <div className="text-center space-y-4">
        <h2 className="text-2xl">Services</h2>
        <h2 className="text-5xl">Our Services Area !</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
        <button
        className="btn btn-primary"
        onClick={()=>setAsc(!asc)}
        >{asc? 'Price: High To Low':'Price: Low To High'}</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default SingleService;
