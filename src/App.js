import "./App.css";
import { useEffect, useState } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/AddEmployeeForm";
import { getEmployeeList } from "./agent/api";

function App() {
  const [employees, setEmployees] = useState([]);

  // gets the employee list from the server
  const setEmployeeList = async () => {
    const employee_list = await getEmployeeList();
    setEmployees(employee_list);
  };

  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    addresses: [],
  });

  useEffect(() => {
    setEmployeeList();
  }, []);

  return (
    <div className="App">
      <EmployeeList
        employees={employees}
        setEmployeeData={setEmployeeData}
        setEmployees={setEmployees}
      />
      <EmployeeForm
        employees={employees}
        setEmployees={setEmployees}
        employeeData={employeeData}
        setEmployeeData={setEmployeeData}
      />
    </div>
  );
}

export default App;
