import { deleteEmployee } from "../agent/api";

const Employee = ({ employee, setEmployees, employees, setEmployeeData }) => {
  return (
    <div className="employee-border">
      <p>
        Name: {employee.firstName} {employee.lastName}
      </p>
      <p>Email: {employee.email}</p>
      <p>Phone Number: {employee.phoneNumber}</p>
      <p>Addresses: {employee.addresses.length}</p>
      <div>
        <span>Actions:</span>
        <div>
          <button
            onClick={() => {
              setEmployeeData(employee);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteEmployee(employee.id);
              setEmployees(employees.filter((e) => e.id !== employee.id));
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
