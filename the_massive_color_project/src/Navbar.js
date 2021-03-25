import React, { Component} from 'react'
import Slider from "rc-slider";
import {Link} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import 'rc-slider/assets/index.css'
import './Navbar.css'

class Navbar extends Component{
    constructor (props){
        super(props)
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.setState({
            format : e.target.value
        })
        this.props.handleChange(e.target.value)
    }

    render(){
        const { level, changeLevel } = this.props
        const { format } = this.state
        return(
            <div className = "Navbar">
                <div className = "Navbar-logo">
                    <Link to = "/">reactcolorpicker </Link>
                </div>

                <div className = "Navbar-container">
                    <div className = "slider-container">
                        <span> Level : {level} </span>
                        <div className = "slider"> 
                            <Slider defaultValue = {level} min= {100} max = {900} step = {100} onAfterChange = {changeLevel} />
                        </div>
                    </div>
                    <Select value = {format} onChange = {this.handleChange}>
                        <MenuItem value = "hex"> HEX - #ffffff</MenuItem>
                        <MenuItem value = "rgb"> RGB - rgb 255, 255, 255</MenuItem>
                        <MenuItem value = "rgba"> RGBA - rgba 255, 255, 255, 1.0 </MenuItem>
                    </Select>
                </div>
            </div>
        )
    }
}

export default Navbar