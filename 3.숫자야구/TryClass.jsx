import React, { Component, PureComponent } from "react";

class Try extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.reuslt !== nextProps.result) {
      return true;
    }
    return false;
  }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
