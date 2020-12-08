import { DOGS } from "../Actions/action";
let iState = {
  dogs: [],
  message:""
};
const reducer = (state = iState, action) => {
  switch (action.type) {
    case 'dogs_fetch':
      return {
        ...state,
        dogs: action.payload
      };
      case 'dogs_fetch_error':
      return {
        ...state,
        dogs:[],
        message: action.payload
      };
    default: return state
  }
};
export default reducer;
