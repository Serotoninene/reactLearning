import React, { Component} from 'react'
import Die from "./Die"
import "./rollDice.css"

class RollDice extends Component {
    static defaultProps = {
        numbers : ['one', 'two','three', 'four', 'five', 'six']
    }

    constructor(props){
        super(props)
        this.state = {
            die1 : "one",
            die2 : "two",
            rolling : false
        }
        this.randomize = this.randomize.bind(this)
    }

    randomize(){
        let rollDie1 = this.props.numbers[Math.floor(Math.random() * 6)];
        let rollDie2 = this.props.numbers[Math.floor(Math.random() * 6)]
        this.setState({
            die1: rollDie1,
            die2: rollDie2,
            rolling: true
        })
        
        setTimeout(() => {
            this.setState({rolling : false})
        }, 1000);
    }

    render(){
        return(
            <div className = "RollDice"> 
                <div>
                    <Die num = { this.state.die1 } rolling= {this.state.rolling}/>
                    <Die num = { this.state.die2 } rolling= {this.state.rolling}/>
                </div>
                <button onClick={this.randomize} disabled= {this.state.rolling} > 
                {this.state.rolling ? 'Rolling ...' : 'Roll the dice'} </button>
            </div>
        )
    }

}

export default RollDice