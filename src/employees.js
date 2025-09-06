const employees = [];

module.exports = {
  addEmployee: (employee) => {
    employees.push(employee);
  },

  getEmployees: () => {
    return employees;
  },
};