import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employees"; // Ensure this matches the backend endpoint

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL+"/"+employeeId);
  }
  updateEmployee(id, employee) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/${id}`, employee);
  }
}

export default new EmployeeService();