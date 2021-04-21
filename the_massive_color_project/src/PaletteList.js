import MiniPalette from "./MiniPalette"

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withStyles} from '@material-ui/styles'

import bg from './bg.svg'

const styles = {
    root : {
        backgroundColor : 'blue',
        backgroundImage : `url(${bg})`,
        backgroundSize : 'cover',
        height : '100vh',
    },

    navbar : {
        display: 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        color : 'white',
        "& a" : {
            color: 'white'
        }
    },

    main : {
        display : 'flex',
        flexDirection : 'column',
        width: '50vw',
        margin: '0 auto',
        textAlign : 'center',
    },

    paletteList : {
        display : 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'space-around'
    },

    palette : {
        gridColumn : 'span 1'
    }
}

class PaletteList extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.goToPalette = this.goToPalette.bind(this)
    }

    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }

    render(){       
        const { classes } = this.props
        const paletteList = this.props.palettes.map((e, idx) => (
            <div className = {classes.palette} key= {idx}> 
                <MiniPalette {...e} handleClick = {() => this.goToPalette(e.id)} /> 
                </div>
        ))

        console.log(classes)

        return (
            <div className = {classes.root}>
                <div className = {classes.main}>
                    <div className = {classes.navbar}>
                        <h1> React Colors </h1>
                        <Link to = "/palette/new"> Create a New Palette</Link>
                    </div>
                    <div className = {classes.paletteList}> 
                        {paletteList}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)