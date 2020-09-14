import React from 'react';

const Todos=({todos, deleteTodo})=>{

    const todoList=todos.length?
        (
            todos.map(todo=>{
                return(
                    <div className="collection-item" key={todo.id}>
                        <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                    </div>
                )
        }))
        :
        (
        <p className="center">You don't have anything in your todos list</p>
        );

    return(
        <div className="collection-item">
            {todoList}
        </div>
    )
}

export default Todos;