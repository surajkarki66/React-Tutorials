export default (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    case "REMOVE_EMPLOYEES":
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };

    case "EDIT_EMPLOYEES":
      const updatedEmployee = action.payload,
      const updatedEmployees = state.employees.map(employee => {
        if (employee.id === updatedEmployee.id) {
            return updatedEmployee;
        }
        return employee;
    });

    return {
      ...state,
      employees: updatedEmployees
    }

    default:
      return state;
  }
};
