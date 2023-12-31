import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProjectsTable from './ProjectsTable';

const LandlordDashboard = () => {
  // Add state, methods, and other logic here
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/api/properties/landlord/properties')
        .then(response => {
            setProperties(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the landlord properties', error);
        });
}, []);
  

  return (
    <div className="dashboard tenant-dashboard">
        <ProjectsTable userRole="ROLE_LANDLORD" data={properties} />



    </div>
  );
};

export default LandlordDashboard;
