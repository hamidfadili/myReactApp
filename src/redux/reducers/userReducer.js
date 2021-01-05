import { UPDATE_USER } from "../actionTypes";

const userReducer = function (state = {}, action) {
  switch (action.type) {
    case UPDATE_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
