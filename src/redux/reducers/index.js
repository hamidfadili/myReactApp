import { combineReducers } from "redux";
import carteReducer from "./carteReducer";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: carteReducer,
});
