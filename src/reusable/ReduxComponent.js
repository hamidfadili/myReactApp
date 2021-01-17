import { Component } from "react";
import store from "../redux/store";

class ReduxComponent extends Component {
  componentDidMount() {
    if (this.refresh) {
      this.refresh();
      this.unsubscribe = store.subscribe(this.refresh);
    }
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }

  refresh = () => {};
}

export default ReduxComponent;
