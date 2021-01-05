import { createStore } from "redux";
import rootReducer from "./reducers";

const initialState = {
  user: {
    firstName: "Hamid",
    lastName: "FADILI",
    email: "hamid@fadili.com",
    password: "123456",
  },
  cart: [],
  products: [
    { id: 11, title: "First product", price: 25.99 },
    { id: 12, title: "Second product", price: 80.99 },
    { id: 13, title: "Third product", price: 19.59 },
    { id: 14, title: "Fourth product", price: 2.5 },
    { id: 15, title: "Fifth product", price: 20.99 },
  ],
};
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
