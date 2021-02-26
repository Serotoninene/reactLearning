import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './scss/Todos.scss'
import './scss/Form.scss'


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            task : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(evt){
        console.log(evt.target.name)
        this.setState(
            {[evt.target.name] : evt.target.value}
        )
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addTodo(
            {task : this.state.task, id : uuidv4() }
        )
        this.setState(
            { task : "" }
        )
    }


    render(){
        return(
                <form className = "Form flex" onSubmit = { this.handleSubmit }>
                  
                    <input 
                        onChange = {this.handleChange} 
                        type = 'text' 
                        value = { this.state.task }  
                        name = "task"  
                    />
                    <button> Add Todo </button>
                </form>
          
        )
    }
}

export default Form