import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants";

const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [action.payload, ...state];

    case DELETE_TASK:
      return state.filter((st) => st.id !== action.payload);

    case COMPLETE_TASK:
      return state.map((st) => {
        if (st.id === action.payload) {
          return { ...st, completed: true };
        } else {
          return st;
        }
      });

    default:
      return state;
  }
};

export default todoReducer;
