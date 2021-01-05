import { ADD_TO_CART } from "../actionTypes";

const carteReducer = function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, { ...action.payload }];
    }
    default:
      return state;
  }
};

export default carteReducer;
