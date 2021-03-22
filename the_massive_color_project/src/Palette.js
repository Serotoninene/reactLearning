import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

import './Palette.css'

class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {
            level: 500
        }
        this.handleChange = this.handleChange.bind(this)
    }   

    handleChange(newLevel){
        this.setState({ level : newLevel })
    }

    render(){
        const colors = this.props.palette.colors
        const level = this.state.level

        const colorBoxes = colors[level].map( (color,idx) =>(
            <ColorBox background = {color.hex} name = {color.name} key = {idx}  />
        ) )

        return (
            <div className = "Palette">
                <Navbar level = {level} changeLevel = {this.handleChange} />
                <div className = "Palette-colors"> 
                    {colorBoxes}
                </div>

            </div>
        )
    }

}

export default Palette 