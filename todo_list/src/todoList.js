import React, {Component} from 'react'
import Todo from './todo'
import NewTodoForm from './newTodoForm'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {todos : []}
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

    create(newTodo){
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    remove(id){
        this.setState(
            {todos : this.state.todos.filter(t => t.id !== id)}
        )
    }

    update(id, updatedTodo){
        const updatedTodos = this.state.todos.map( todo => {
            if (todo.id === id){
                return {...todo, task: updatedTodo}
            }else {
                return todo;
            }
        })

        this.setState({
            todos: updatedTodos
        })
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map( todo => {
            if (todo.id === id){
                return {...todo, completed: !todo.completed}
            }else {
                return todo;
            }  
        })

        this.setState({
            todos: updatedTodos
        })
    }



    render(){
        const todos = this.state.todos.map( todo => {
            return <Todo 
                key = {todo.id} 
                id = {todo.id} 
                task = {todo.task} 
                completed = {todo.completed}
                removeTodo = {this.remove} 
                updateTodo = {this.update} 
                toggleCompletion = {this.toggleCompletion}
                />
        })

        
        
        return (
            <div>
            <NewTodoForm createTodo = {this.create} />
            <h1>Todo List!</h1>
            <ul> 
                { todos }
            </ul>
            </div>
        )
    }
}

export default TodoList