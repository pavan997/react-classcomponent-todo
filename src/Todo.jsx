import React from "react";
// import { render } from 'react-dom'
import { v4 as uuid } from "uuid";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Todo: [],
      query: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      query: e.target.value
    });
  };
  handleClick = () => {
    const payload = {
      title: this.state.query,
      status: false,
      id: uuid()
    };
    this.setState({
      Todo: [...this.state.Todo, payload]
    });
  };
  handleDelete = (id) => {
    let updatedList = this.state.Todo.filter((item) => item.id !== id);
    this.setState({
      Todo: updatedList
    });
  };
  render() {
    return (
      <>
        <h1>Todo</h1>
        <input
          type="text"
          placeholder="type anything "
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>ADD TODO</button>
        {this.state.Todo.map((item) => (
          <div>
            {item.title}
            <button onClick={() => this.handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </>
    );
  }
}
export { Todo };
