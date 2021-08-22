import React, { Component } from "react";
import TodoForm from "./TodoForm";
 class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todolist</h1>
        <TodoForm/>
      </div>
    );
  }
}

export default Todos;
