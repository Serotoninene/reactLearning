import React, {Component} from 'react'
import Coin from './Coin'
import './FlipCoin.css'

class FlipCoin extends Component{
    static defaultProps = {
        sides : ['heads', 'tails']
    } 

    constructor(props){
        super(props)
        this.state = {
            side : null,
            nbHeads : 0,
            nbTails : 0
        }
        this.flip = this.flip.bind(this)
    }

    flip(){
        let randomIdx = Math.floor( Math.random() * 2);
        this.setState( (st, props) => ({
            side : props.sides[randomIdx],
            nbHeads : st.nbHeads + (st.side === "heads" ? 1 : 0 ),
            nbTails : st.nbTails + (st.side === "tails" ? 1 : 0 ),
        }))

    }    



    render(){
        return(
            <div> 
                <h1> Flip a coin ! </h1>
                { this.state.side && <Coin side = {this.state.side} />}
                <button onClick = {this.flip}> Flip a Coin </button>
                <p>{`Number of tails : ${this.state.nbTails} - Number of heads : ${this.state.nbHeads} `}</p>
            </div>
        )
    }
}

export default FlipCoin