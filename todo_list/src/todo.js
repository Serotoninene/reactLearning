import React, {Component} from 'react'
import './todo.css'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            isEditing : false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value 
        })
    }

    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    toggleForm(){
        this.setState({ isEditing : !this.state.isEditing })
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task)
        this.setState({
            isEditing: false
        })
    }

    handleClick(){
       this.props.toggleCompletion(this.props.id)
    }

    render(){
        let result; 
        if(this.state.isEditing){
            result = 
            (<form onSubmit = {this.handleUpdate}>
                <input 
                    type = 'text'
                    value = {this.state.task}
                    name = 'task'
                    onChange = {this.handleChange}
                ></input>
                <button> Save </button>
            </form>)
        }else {
            result = (<div>
                <button onClick = {this.toggleForm} >Edit</button>
                <button onClick = {this.handleRemove} >X</button>
                <li onClick = {this.handleClick} className = {this.props.completed && 'completed'}> {this.props.task } </li>
            </div>)
        }

        return result
        
    }
}

export default Todo