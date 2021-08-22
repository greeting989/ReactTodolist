import React ,{ Component } from 'react';
class TodoItem extends Component{
   deletehandler=(id)=>{
      const list = this.props.list;
      this.setState({
         list:list.filter((index)=>index!=id)
      })
   }
   render(){
      const list = this.props.list;
     
       return(
        <div>
           <p>{list}<button onClick={this.deletehandler(index)}>Delete</button></p>
        </div>
       )
   }
} 

export default TodoItem;