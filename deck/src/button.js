import React, { Component } from 'react'
import './Card.css'
import axios from 'axios'

class Button extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        axios.get (`https://deckofcardsapi.com/api/deck/${this.props.deck_id}/draw/`)
        .then( res => {
            let newCard = res.data.cards[0];
            let cardRemaining = res.data.remaining;
            console.log (cardRemaining)
            this.props.addCard(newCard, cardRemaining)
        })
    }

    render(){
        return <button onClick = {this.handleClick}> Gimme a card </button>
    }
}

export default Button