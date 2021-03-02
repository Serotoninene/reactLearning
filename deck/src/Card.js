import React, { Component } from 'react'

class Card extends Component {
    
    render(){
        let cards_img = this.props.cards_img
        let random_rotation = Math.floor(Math.random() * 90)  
        let style = `rotate(${random_rotation}deg)`
        let card = cards_img.map((e, idx) => {
            return <img src = {e} alt = 'card' key = {idx} style = {{transform : style}}/> 
        })
        

        return (<div className = 'Card'>
            {card}
        </div>)
    }
}

export default Card