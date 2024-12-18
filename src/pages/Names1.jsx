import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios

const Names1 = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/showregister'); // Fetch data using Axios
      setAgents(response.data); // Set fetched data to state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleUpdate = (index) => {
    console.log("Update agent at index:", index);
    // Implement update functionality here
  };

  const handleDelete = async (index, id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      const updatedAgents = [...agents];
      updatedAgents.splice(index, 1);
      setAgents(updatedAgents);
    } catch (error) {
      console.error('Error deleting agent:', error);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: '#e27bb1', height: '150px', display: 'flex', justifyContent: 'left', alignItems: 'center', paddingLeft: '20px' }}>
        <h1><b>Delivery Agents</b></h1>
      </div>
      <br /><br />

      <div style={{ display: 'flex', paddingLeft: '30px', paddingTop: '30px' }}>
        <Button style={{ marginRight: '10px', width: '70px', height: '60px', fontSize: '30px' }}>+</Button>
        <div style={{ fontSize: "30px", paddingTop: '10px' }}>Add Delivery Agents</div>
      </div>

      <br/><br/><br/>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent, index) => (
            <tr key={agent._id}>
              <td>{agent.firstName}</td>
              <td>{agent.lastName}</td>
              <td>{agent.dob}</td>
              <td>{agent.gender}</td>
              <td>{agent.mobile}</td>
              <td>{agent.email}</td>
              <td>{agent.address}</td>
              <td>
                <Button variant="warning" onClick={() => handleUpdate(index)} style={{ marginRight: '10px' }}>Update</Button>
                <Button variant="danger" onClick={() => handleDelete(index, agent._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Names1;
