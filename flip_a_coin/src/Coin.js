import React, {Component} from 'react'
import "./Coin.css"
class Coin extends Component{


    render(){

        console.log(this.props.side)
        return (
            <div className= "Coin"> 
                <img src = {`https://tinyurl.com/react-coin-${this.props.side}-jpg`}></img>
            </div>
        )
    }
}

export default Coin