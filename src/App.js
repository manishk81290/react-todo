import React, {Component} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component{
  state={
    todos:[
      {
        id:1,
        content:'Buy webcam for laptop'
      },
      {
        id:2,
        content:'Ask for shoe rack'
      }
    ]
  };

  deleteTodo=(id)=>{
    console.log(id);
    const todoAfterDelete=this.state.todos.filter(todo=>{
      return todo.id!==id;
    });
    this.setState({
      todos:todoAfterDelete
    });
  }

  addTodo=(todo)=>{
    console.log(todo);
    todo.id=Math.floor(Math.random() * 100);
    const newTodoList=[...this.state.todos,todo];
    this.setState({
      todos:newTodoList
    });
  }

  render(){
  return (
    <div className="App container">
      <div className="collection with-header">
        <div className="collection-header center blue-text">
          <h1>Todo's</h1>
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
      <AddTodo addtodo={this.addTodo} />
    </div>
  );
  }
}

export default App;
