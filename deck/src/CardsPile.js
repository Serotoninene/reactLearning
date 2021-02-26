import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'
import Button from './button'

class CardsPile extends Component {
    constructor(props){
        super(props)
        this.state = {
            deck_id : '',
            cards_img : [],
            card_remaining : '',
        }
        this.addCard = this.addCard.bind(this)
    }

    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle')
        .then(res => {
            const request = res.data.deck_id
            this.setState({
                deck_id : request

             })
            }
        ) 
    }

    addCard(newCard, cardRemaining){
        this.setState( {
            cards_img : [...this.state.cards_img, newCard.image],
            card_remaining : cardRemaining,
        })
    }

    render(){
        return (
            ( this.card_remaining = 0 ?
                <h1> YOU LOSE </h1> 
            :  
                <div>
                    <Button addCard = {this.addCard} deck_id = {this.state.deck_id}/>
                    <h1> cards remaining : {this.state.card_remaining} </h1>
                    <Card cards_img = {this.state.cards_img} />
                </div>)
        )
    }
}

export default CardsPile