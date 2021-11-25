import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      CountClick: 0
    };
  }
  handleClick = (val) => {
    this.setState({
      counter: this.state.counter + val,
      CountClick: this.state.CountClick + 1
    });
  };
  render() {
    const { counter, CountClick } = this.state;
    return (
      <>
        <div>hello</div>
        <h2>{counter}</h2>
        <button onClick={() => this.handleClick(1)}>ADD</button>
        <button onClick={() => this.handleClick(-1)}>REDUCE</button>
        <div>{`button is clicked ${CountClick} times`}</div>
      </>
    );
  }
}

export { Counter };
