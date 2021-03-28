import React from 'react'
import {withStyles} from '@material-ui/styles'

import './MiniPalette.css'

const styles = {
    main : {
        width: '95%',
        // height: '15vw',
        backgroundColor : "white",
        paddingTop: '10px',
        borderRadius: '10px',
        margin: '5px',
        cursor: 'pointer'

    },

    colors: {
        backgroundColor: 'lightgrey',
        width: '90%',
        height: '10vw',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '10px',
        overflow: 'hidden'

    },

    colorBox : {
        display: 'flex',
        height: '25%',
        width: '20%',
        
    },

    title: {
        display: 'flex',
        justifyContent : 'space-around',
        fontSize : '0.8em'
    }
}

function MiniPalette(props){
    const { classes, paletteName, emoji, handleClick } = props
    const colorBoxes = props.colors.map( (color, idx) => (
            <div
                key = {idx} 
                className = {classes.colorBox} 
                style = {{backgroundColor: `${color.color}`}}> 
            </div>
        )
    )

    return (
        <div className = {classes.main} onClick = {handleClick}> 
            <div className = {`${classes.colors} MiniPalette-colors`}>
                {colorBoxes}
            </div>
            <h2 className = {classes.title}> 
                {paletteName} 
                <span> 
                    {emoji} 
                </span>
            </h2>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)