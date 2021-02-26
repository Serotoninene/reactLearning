import React, { Component } from 'react'
import Form from './formTodo'
import Todos from './Todos'

class Todolist extends Component{

    constructor(props){
        super(props)
        this.state = {
            todos : [{task : 'change my carpet', id : 1}, {task : 'change my hair lotion', id : 2}]
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
    }

    addTodo(newTodo){
        this.setState({
            todos : [...this.state.todos, newTodo]
        })
    }

    removeTodo(id){
        this.setState({
            todos : this.state.todos.filter( todo => todo.id !== id)
        })
    }

    render(){ 
        console.log(this.state.todos)
        return(
            <div className = "container">
                <h1 >TODO</h1>
                <Form addTodo = {this.addTodo}/>
                <Todos tasks = {this.state.todos} removeTodo = {this.removeTodo}/>
            </div>
        )
    }
}

export default Todolist