import React, {Component} from 'react'
import "./Die.css"

class Die extends Component{

    constructor(props){
        super(props)
    }

    render() {
        let num = this.props.num;
        let icon= 'fas fa-10x fa-dice-' + num;
       

        return(
            <div className= "Die">
                <h1>Test</h1>
                <div >
                    <i className= {icon} ></i>
                </div>
            </div>
        ) 
    }
}


export default Die