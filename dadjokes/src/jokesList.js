import React, { Component } from 'react'
import Joke from './joke'
import axios  from 'axios'

const API_URL = 'https://icanhazdadjoke.com'

class JokesList extends Component {
    static defaultProps = {
        numOfJokes : 10,
    }

    constructor (props){
        super(props)
        this.state = {
            jokes : [],
        }
    }

    
    async componentDidMount(){
        let jokeArray = [];
        while (jokeArray.length < this.props.numOfJokes){
            let res = await axios.get(API_URL, {headers : { 'Accept' : 'application/json'} })
            jokeArray.push({joke : res.data.joke, id : res.data.id, score : 0})
        }

        this.setState(
            { jokes : jokeArray }
        )
       
    }

    render(){
        let jokes = this.state.jokes.map(element => (
            <Joke joke = {element.joke} key = {element.id} score = {element.score}/>
        ));
        

        return (
            <div>
                <button> NEW JOKES </button>
                {jokes}
            </div>
        )
    }
}

export default JokesList