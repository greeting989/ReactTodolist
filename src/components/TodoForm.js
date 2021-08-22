import React, { Component } from "react";
import Todolist from "./TodoList";
 class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      text: "",
    };
  }
  updateInput=(e)=>{
      this.setState({
          text : e.target.value
      })
  }
  handleAdd=(e)=>{
    const {text} = this.state;
       if(text===""){
         alert('Empty add');
       }else{
         const list = [...this.state.list,this.state.text]
         //list.push(text);  
         this.setState({
           list,
           text: ' '
         })
       }
  }

  render() {
      const {text}= this.state;
     
    return (
      <div>
          <input type="text" placeholder="Add an item" value={text} onChange={this.updateInput}/>
          <button type="button" onClick={this.handleAdd} >Add</button>  
          <Todolist item={this.state.list}/>
      </div>
    );
  }
}

export default TodoForm;
