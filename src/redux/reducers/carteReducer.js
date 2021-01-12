import { ADD_TO_CART, UPDATE_CART_COUNT } from "../actionTypes";
import cartService from "../../services";

const carteReducer = function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return cartService.addToCart(state, action.payload);
    }
    case UPDATE_CART_COUNT: {
      return cartService.updateProductCount(state, action.payload);
    }
    default:
      return state;
  }
};

export default carteReducer;
