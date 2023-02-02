import axios from "axios";

const BASE_API_URL = "https://localhost:5001/api/employee";

const getEmployeeList = async () => {
  const response = await axios.get(BASE_API_URL);
  return response.data;
};

const createEmployee = async (current_id, data) => {
  const response = await axios.post(BASE_API_URL, {
    ...data,
    id: current_id + 1,
  });
  return response.data;
};

const deleteEmployee = async (id) => {
  await axios.delete(`${BASE_API_URL}/${id}`);
};

const editEmployee = async (id, data) => {
  const response = await axios.put(`${BASE_API_URL}/${id}`, data);
  return response.data;
};

export { getEmployeeList, createEmployee, deleteEmployee, editEmployee };
