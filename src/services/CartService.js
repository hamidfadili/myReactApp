import cloneDeep from "lodash/cloneDeep";

class CartService {
  addToCart(state, productId) {
    let mutableState = cloneDeep(state);
    if (mutableState[productId]) {
      mutableState[productId].count += 1;
    } else {
      mutableState[productId] = { productId: parseInt(productId), count: 1 };
    }
    return mutableState;
  }

  updateProductCount(state, { productId, count }) {
    let metableState = cloneDeep(state);
    metableState[productId] = { productId, count };
    return metableState;
  }
}

export default CartService;
