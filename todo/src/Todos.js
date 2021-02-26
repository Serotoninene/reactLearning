import React, { Component } from 'react'
import './scss/Todos.scss'

class Todos extends Component {

    constructor (props){
        super(props)
        this.handleClick = this.handleClick.bind(this)   
    }

    handleClick(evt){
        this.props.removeTodo(evt.target.id)
    }

    render(){
        const tasks = this.props.tasks.map( todo => (
            <div className = "Todo flex" key =  {todo.id} > 
                <p> {todo.task} </p>
                <p id = {todo.id} onClick = { this.handleClick }> X </p>
            </div>
        ))

  
        return (
            <div > 
                {tasks}
            </div> 
        )
    }
}

export default Todos