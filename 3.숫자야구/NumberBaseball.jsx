import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmin={this.onSubminForm}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {["like", "like"].map(() => {
            return <li>like</li>;
          })}
        </ul>
      </>
    );
  }
}

// export const hello = "hello"; // import { hello }
// export const bye = "hello"; // import { hello, bye }

export default NumberBaseball; // import NumberBaseball;

// const React = require('react');
// module.exports = { hello: 'a' }
// exports.hello = 'hello'
//
// module.exports = NumberBaseball;
