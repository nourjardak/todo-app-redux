import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  COMPLETE_TASK,
} from "../Const/ActionTypes";

const initialstate = {
  listTodo: [],
};

const todoReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, listTodo: [...state.listTodo, payload] };
    case DELETE_TASK:
      return {
        ...state,
        listTodo: state.listTodo.filter((el) => el.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        listTodo: state.listTodo.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        listTodo: state.listTodo.map((el) =>
          el.id === payload.id ? { ...el, task: payload.taskmodified } : el
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
