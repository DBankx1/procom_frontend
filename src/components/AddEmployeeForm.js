import AddressForm from "./AddressForm";
import { createEmployee, editEmployee } from "../agent/api";

// Here im using the id to know if im editing an employee or creating an employee -- i could also add state and use state for this purpose

const EmployeeForm = ({
  employeeData,
  setEmployeeData,
  employees,
  setEmployees,
}) => {
  const setEmployee = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const submitEmployee = (e) => {
    e.preventDefault();
    // use the id to check if you are editing or creating an employee
    if (employeeData.id) {
      editEmployee(employeeData.id, employeeData);
      // edit the employee in the employees array
      setEmployees(
        employees.map((employee) =>
          employee.id === employeeData.id ? employeeData : employee
        )
      );
      alert("Employee was edited successfully");
    } else {
      createEmployee(employees.length, employeeData);
      // add new employee to the employee array
      setEmployees([
        ...employees,
        { ...employeeData, id: employees.length + 1 },
      ]);
    }

    // RESET FORM
    setEmployeeData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      addresses: [],
    });
  };

  return (
    <div>
      <h1>
        {employeeData.id ? "Editing" : "Create"} Employee{" "}
        {employeeData.id &&
          employeeData.firstName + " " + employeeData.lastName}
      </h1>
      <div>
        <form className="grid-array-form" onSubmit={(e) => submitEmployee(e)}>
          <input
            placeholder="firstName"
            name="firstName"
            value={employeeData.firstName}
            onChange={(e) => setEmployee(e)}
          />
          <input
            placeholder="lastName"
            name="lastName"
            value={employeeData.lastName}
            onChange={(e) => setEmployee(e)}
          />
          <input
            placeholder="email"
            name="email"
            value={employeeData.email}
            onChange={(e) => setEmployee(e)}
          />
          <input
            placeholder="phoneNumber"
            name="phoneNumber"
            value={employeeData.phoneNumber}
            onChange={(e) => setEmployee(e)}
          />

          <AddressForm
            userAddresses={employeeData.addresses}
            setEmployeeData={setEmployeeData}
            employeeData={employeeData}
          />

          <div>
            <button type="submit">
              {employeeData.id ? "Edit" : "Create"} Employee
            </button>
            <button
              className="margin-left"
              type="button"
              onClick={() =>
                setEmployeeData({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phoneNumber: "",
                  addresses: [],
                })
              }
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
