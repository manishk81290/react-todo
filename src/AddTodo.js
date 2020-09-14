import React, {Component} from 'react';

class AddTodo extends Component{
    state={
        content:''
    };

    handleOnChange=(e)=>{
        this.setState({
            content:e.target.value
        });
        console.log(this.state.content);
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:''
        });
    }

    render(){
        return(
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" id="content" onChange={this.handleOnChange} placeholder="Content" value={this.state.content}></input>
                        <button className="waves-effect wave-light btn" onClick={this.handleSubmit}>Add Todo</button>
                    </div>    
                </form>   
            </div>
        );
    }
}

export default AddTodo;