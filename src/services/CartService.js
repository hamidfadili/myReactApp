import cloneDeep from "lodash/cloneDeep";

class CartService {
  addToCart(state, productId) {
    let mutableState = cloneDeep(state);
    if (mutableState[productId]) {
      mutableState[productId] += 1;
    } else {
      mutableState[productId] = { productId, count: 1 };
    }
    return mutableState;
  }

  updateProductCount(state, { productId, count }) {
    console.log({ count, productId });
    return state;
  }
}

export default CartService;
