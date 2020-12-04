import { DOGS } from "../Actions/action";
let iState = {
  dogs: []
};
const reducer = (state = iState, action) => {
  switch (action.type) {
    case 'dogs_fetch':
      return {
        ...state,
        dogs: action.payload
      };
    default: return state
  }
};
export default reducer;
