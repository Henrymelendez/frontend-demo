import React, {useEffect,useState} from 'react';
import axios from 'axios';
import ProjectsTable from './ProjectsTable';

const TenantDashboard = () => {
  // Add state, methods, and other logic here
  const [properties, setProperties] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/api/properties/tenant/properties')
          .then(response => {
              setProperties(response.data);
          })
          .catch(error => {
              console.error('There was an error fetching the tenant properties', error);
          });
  }, []);

  return (
    <div>
      <h1>Tenant Dashboard</h1>
      <ProjectsTable userRole="ROLE_TENANT" data={properties} />
    </div>
  );
};

export default TenantDashboard;
