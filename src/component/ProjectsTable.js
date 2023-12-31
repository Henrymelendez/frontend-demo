import React from 'react';
import '../css/ProjectsTable.css'; // Ensure you have the CSS file for styling

const ProjectsTable = ({ userRole, data }) => {
    const renderTableRows = () => {
        if (userRole === 'ROLE_LANDLORD') {
          return data.map((project, index) => (
            <tr key={project.id}>
              <td>{project.address}</td>
              <td>{project.dueDate}</td>
              <td>{project.landlord.firstName} {project.landlord.lastName}</td>
              <td>{project.rent}</td>
              <td>{project.apartmentType}</td>
              <td className="text-right">Actions</td>
            </tr>
          ));
        } else if (userRole === 'ROLE_TENANT') {
          return data.map((project, index) => (
            <tr key={project.id}>
              <td>{project.address}</td>
              <td>{project.dueDate}</td>
              <td>{project.tenants.map(tenant => `${tenant.firstName} ${tenant.lastName}`).join(', ')}</td>
              <td>{project.rent}</td>
              <td>{project.apartmentType}</td>
              <td className="text-right">Actions</td>
            </tr>
          ));
        }
        return null; // or some default content
    };

    return (
      <div className="projects mb-4">
        <div className="projects-inner">
          <header className="projects-header">
            <div className="title">Ongoing Projects</div>
            <div className="count">| {data.length} Projects</div>
            <i className="zmdi zmdi-download"></i>
          </header>
          <table className="projects-table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Due Date</th>
                <th>Contacts</th>
                <th>Rent</th>
                <th>Type</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ProjectsTable;
