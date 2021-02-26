import React, { Component } from 'react'

class Card extends Component {

    render(){
        let cards_img = this.props.cards_img
        let random_rotation = Math.floor(Math.random() * 10)  
        let style = "transform : translate(-50%, -50%)"
        let card = cards_img.map((e, idx) => {
            return <img src = {e} alt = 'card' key = {idx}/> 
        })
        

        return (<div className = 'Card'>
            {card}
        </div>)
    }
}

export default Card