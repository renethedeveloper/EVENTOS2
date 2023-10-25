import { useState } from "react";
import axios from "axios";






const EmployeeForm = () => {
    const [employeeData, setEmployeeData] = useState({
      name: '',
      age: 0,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEmployeeData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios({
          method: 'POST',
          url: '/server/events/employees',
          data: employeeData,
        });
  
        if (response.status >= 200 && response.status < 300) {
          // Update employeeData with the new data
          setEmployeeData((prevState) => [...prevState, response.data]);
          
          console.log('Employee registered successfully:', response.data);
        } else {
          console.error('Error registering Employee:', response.data);
        }
      } catch (error) {
        console.error('There was an error sending the request:', error);
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Employee:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={employeeData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={employeeData.age}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Register Employee</button>
        </form>
      </div>
    );
  };
  export default EmployeeForm