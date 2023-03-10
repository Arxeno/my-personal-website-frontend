import React, { useEffect, useState } from 'react';
import CONFIG from '../config';
import Service from './Service';

const Services = () => {
  const [services, setServices] = useState([]);

  const fetchServicesData = () => {
    fetch(`${CONFIG.BACKEND_URL}/services`)
      .then((res) => res.json())
      .then((resJson) => setServices(resJson))
      .catch((err) => alert(err));
  };

  useEffect(() => fetchServicesData(), []);

  return (
    <div id="services" className="container">
      <h1 className="border-effect head-of-each-section">Services</h1>

      <div id="services-subcontainer">
        {services.length > 0
          ? services.map((data, index) => {
              return <Service key={index} serviceData={data} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Services;
