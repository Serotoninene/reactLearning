import React, { Component } from 'react'

class Joke extends Component{
    render(){
        return (
            <div>{this.props.joke} - {this.props.score}</div>
        )
    }
}
 export default Joke