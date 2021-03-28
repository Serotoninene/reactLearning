
import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon  from '@material-ui/icons/Close'


import './Palette.css'

class Palette extends Component {
    constructor(props){
        super(props)
        this.state = {
            level: 500,
            format: "hex",
            open: false
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }   

    changeLevel(newLevel){
        this.setState({ level : newLevel })
    }

    changeFormat(val){
        this.setState({
            format : val,
            open: true
        })
    }

    closeSnackbar(){
        this.setState({
            open: false
        })
    }

    render(){
        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state

        const colorBoxes = colors[level].map( (color,idx) => (
           <ColorBox 
            background = {color[format]} 
            name = {color.name} 
            key = {idx} 
            paletteId = {id} 
            colorId = {color.id} 
            showMore = { true }
            />
        ) )

        return (
            <div className = "Palette">
                <Navbar 
                    level = {level} 
                    changeLevel = {this.changeLevel} 
                    handleChange = {this.changeFormat} 
                    showingAllColors = { true }
                    />
                <div className = "Palette-colors"> 
                    {colorBoxes}
                </div>
                <footer className = "Palette-footer">
                    <PaletteFooter paletteName = {paletteName} emoji = {emoji} />
                </footer>
                <Snackbar 
                    anchorOrigin = {{vertical: "bottom", horizontal: "left"}}
                    open ={this.state.open}
                    autoHideDuration = {1500}
                    message = {<span> Format changed to {format.toUpperCase()}</span>}
                    onClose = {this.closeSnackbar}
                    action = {[
                        <IconButton onClick= {this.closeSnackbar} color = "inherit">
                            <CloseIcon/>
                        </IconButton>
                    ]} 
                />         
            </div>
        )
    }

}

export default Palette 