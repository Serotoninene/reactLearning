import React, { Component } from 'react'
import ColorBox from './ColorBox'

import './Palette.css'

class Palette extends Component {
    render(){
        const colorBoxes = this.props.colors.map( (color,idx) =>(
            <ColorBox background = {color.color} name = {color.name} key = {idx}  />
        ) )
        console.log (colorBoxes)

        return (
            <div className = "Palette">
                <div className = "Palette-colors"> 
                    {colorBoxes}
                </div>

            </div>
        )
    }

}

export default Palette 