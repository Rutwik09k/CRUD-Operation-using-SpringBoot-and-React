import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "./services/EmployeeService";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: ""
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await EmployeeService.getEmployees();
        const emp = response.data.find(emp => emp.id === parseInt(id));
        setEmployee(emp);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await EmployeeService.updateEmployee(id, employee);
      navigate("/employeeList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex max-w-2xl mx-auto shadow border">
        <div className="px-8 py-8">
          <div className="font-thin text-2xl tracking-wider">
            <h1>Edit Employee</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="items-center justify-center h-14 w-full my-4">
              <label htmlFor="firstName" className="block text-gray-600 text-sm font-normal">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={employee.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label htmlFor="lastName" className="block text-gray-600 text-sm font-normal">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={employee.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <div className="items-center justify-center h-14 w-full my-4">
              <label htmlFor="emailId" className="block text-gray-600 text-sm font-normal">
                Email ID
              </label>
              <input
                type="email"
                name="emailId"
                value={employee.emailId}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-slate-600 rounded p-2 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
