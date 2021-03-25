import MiniPalette from "./MiniPalette"

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withStyles} from '@material-ui/styles'

const styles = {
    root : {
        backgroundColor : 'blue',
        height : '100vw'
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
    }

    

    render(){
       
        const { classes } = this.props
        const paletteList = this.props.palettes.map((e, idx) => (
            <div className = {classes.palette} key= {idx} > <MiniPalette {...e} /> </div>
        ))

        console.log(classes)

        return (
            <div className = {classes.root}>
                <div className = {classes.main}>
                    <h1> React Colors </h1>
                    <div className = {classes.paletteList}> 
                        {paletteList}
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)