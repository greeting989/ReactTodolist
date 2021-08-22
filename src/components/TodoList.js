import React, { Component } from "react";
import TodoItem from "./TodoItem";
 class TodoList extends Component {
 
  

  render() { 
   
    return (
     <div>
       {this.props.item.map((items,index)=>{
         return(
          <TodoItem list={items}/>
         )
       })}
     </div>
    );
  }
}

export default TodoList;