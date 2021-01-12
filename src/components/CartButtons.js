import React, { Component } from "react";
import { UPDATE_CART_COUNT } from "../redux/actionTypes";
import store from "../redux/store";

class CartButtons extends Component {
  state = {
    count: 1,
    productId: 1,
  };

  componentDidMount() {
    this.setState(store.getState().cart[this.props.productId]);
  }

  handleCountChange = (data) => {
    let count = parseInt(data);
    if (count > 0) {
      store.dispatch({
        type: UPDATE_CART_COUNT,
        payload: { productId: this.props.productId, count },
      });
      this.setState({ count });
    }
  };

  render() {
    const count = this.state.count;
    return (
      <div className="row">
        <div className="col-md-3">
          <button
            className="btn btn-primary"
            onClick={() => this.handleCountChange(count + 1)}
          >
            +
          </button>
        </div>
        <div className="col-md-6">
          <input
            size="5"
            value={count}
            onChange={({ currentTarget }) =>
              this.handleCountChange(currentTarget.value)
            }
          />
        </div>
        <div className="col-md-3">
          <button
            className="btn btn-primary"
            onClick={() => this.handleCountChange(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default CartButtons;
