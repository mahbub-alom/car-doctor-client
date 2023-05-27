import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const SingleService = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://car-doctor-server-black-rho.vercel.app/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc,search]);

  const handleClick = () => {
    setSearch(searchRef.current.value);
    console.log(searchRef.current.value);
  };

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
        <div className="flex justify-between ms-10 me-16">
          <div className="form-control">
            <div className="input-group">
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                className="input input-bordered"
              />
              <button onClick={handleClick} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => setAsc(!asc)}>
            {asc ? "Price: High To Low" : "Price: Low To High"}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default SingleService;
