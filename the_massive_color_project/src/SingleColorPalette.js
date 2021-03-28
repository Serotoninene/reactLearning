import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from './Navbar'
import ColorBox from './ColorBox'
import PaletteFooter from './PaletteFooter'

import './ColorBox.css'
import './SingleColorPalette.css'


class SingleColorPalette extends Component{
    constructor(props){
        super(props) 
        this.state = { format : "hex" }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.changeFormat = this.changeFormat.bind(this)
    }

    gatherShades(palette, colorFilteredBy){
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
        
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorFilteredBy)
            )
        }

        return shades.slice(1)
    }

    changeFormat(val){
        this.setState({
            format : val,
            open: true
        })
    }

    render(){
        const { format } = this.state
        const { paletteName, emoji, id } = this.props.palette
        const colorBoxes = this._shades.map( (color, idx) => (
            <ColorBox 
                background = {`${color[format]}`} 
                name = {color.name} 
                key = {idx} 
                showMore = { false }
            />
        ))

        return (
            <div className = "SingleColorPalette">  
                <Navbar
                    handleChange = {this.changeFormat}
                    showingAllColors = { false }
                />
                {colorBoxes}
                <div className = "goBack ColorBox">
                    <Link to = {`/palette/${id}`} className = "goBack-button">Go Back</Link>
                </div>

                <footer>
                    <PaletteFooter paletteName = {paletteName} emoji = {emoji} />
                </footer>
            </div>
        )
        
    }
}

export default SingleColorPalette