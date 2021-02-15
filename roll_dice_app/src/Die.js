import React, {Component} from 'react'
import "./Die.css"

class Die extends Component{

    render() {
        let num = this.props.num;
        let icon= 'fas fa-10x fa-dice-' + num;
       

        return(
            <div className= "Die">
                <div >
                    <i className= {`fas fa-10x fa-dice-${this.props.num} ${this.props.rolling && 'wiggle' }`} ></i>
                </div>
            </div>
        ) 
    }
}


export default Die