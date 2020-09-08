export default (state, action) => {
  switch (action.type) {
    case "ADD_EMPLOYEES":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };

    default:
      return state;
  }
};
