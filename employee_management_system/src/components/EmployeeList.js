import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./services/EmployeeService";

function EmployeeList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        console.log(response)
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      await EmployeeService.deleteEmployee(employeeId);
      setEmployees(employees.filter((employee) => employee.id !== employeeId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editEmployee/${id}`);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12 px-7">
        <button
          type="button"
          className="bg-slate-600 rounded p-2 text-white"
          onClick={() => navigate("/addEmployee")}
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td className="text-left px-6 py-4">
                    <div className="text-gray-500 text-sm">
                      {employee.firstName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4">
                    <div className="text-gray-500 text-sm">
                      {employee.lastName}
                    </div>
                  </td>
                  <td className="text-left px-6 py-4">
                    <div className="text-gray-500 text-sm">
                      {employee.emailId}
                    </div>
                  </td>
                  <td className="text-right px-6 py-4">
                    <button
                      className="text-indigo-600 font-medium px-4"
                      onClick={() => handleEdit(employee.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-indigo-600 font-medium px-4"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
