import axios from "axios";
import Employee from "./Employee";

const EmployeeList = ({ employees, setEmployees, setEmployeeData }) => {
  return (
    <div>
      <h1>Employees List</h1>
      <div>
        {employees.map((employee) => (
          <div key={employee.id}>
            <Employee
              employees={employees}
              setEmployees={setEmployees}
              employee={employee}
              setEmployeeData={setEmployeeData}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
