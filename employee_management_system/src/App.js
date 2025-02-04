import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<EmployeeList/>}></Route>
          <Route path='/employeeList' element={<EmployeeList/>}></Route>
          <Route path='/addEmployee' element={<AddEmployee/>}></Route>
          <Route path='/editEmployee/:id' element={<EditEmployee/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
