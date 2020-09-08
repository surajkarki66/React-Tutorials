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

    default:
      return state;
  }
};
