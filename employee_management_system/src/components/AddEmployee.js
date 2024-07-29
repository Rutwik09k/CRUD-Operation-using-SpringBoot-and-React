import React, { useState } from "react";
import EmployeeService from "./services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const reset=((e)=>{
    e.preventDefault();
    setEmployee({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });
  })

 const navigate= useNavigate();


  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
      .then((Response) => {
        console.log(Response);
        navigate("/")
      }
    )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-6">
      <div className="flex max-w-2xl mx-auto shadow border">
        <div className="px-8 py-8">
          <div className="font-thin text-2xl tracking-wider">
            <h1>Add New Employee</h1>
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label htmlFor="" className="block text-gray-600 text-sm font-normal">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
              className="border-2 h-8 w-96 mt-2 py-2"
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label htmlFor="" className="block text-gray-600 text-sm font-normal">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
              className="border-2 h-8 w-96 mt-2 py-2"
            />
          </div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label htmlFor="" className="block text-gray-600 text-sm font-normal">
              Email
            </label>
            <input
              type="email"
              name="emailId"
              value={employee.emailId}
              onChange={handleChange}
              className="border-2 h-8 w-96 mt-2 py-2"
            />
          </div>
          <div className="px-32 h-14 my-4 w-full">
            <button
              type="button"  
              className="border h-8 w-96 mt-2 py-2 bg-green-700 flex items-center justify-center rounded-md hover:bg-green-950"
              onClick={saveEmployee}
            >
              Submit
            </button>
            <button
              onClick={reset}
              type="button"  
              className="border h-8 w-96 mt-2 py-2 bg-red-700 flex items-center justify-center rounded-md hover:bg-red-950"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;