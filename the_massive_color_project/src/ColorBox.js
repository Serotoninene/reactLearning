import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {withStyles} from '@material-ui/styles'

import chroma from 'chroma-js'

import './ColorBox.css'

const styles = {
    copiedMessage : {
        color: props => (chroma(props.background).luminance() >= 0.67 ? "rgba(0,0,0,0.6)" : "white"),
    }, 
    copyButton : {
        color: props => (chroma(props.background).luminance() >= 0.67 ? "rgba(0,0,0,0.6)" : "white"),
    },
    moreButton : {
        color: props => (chroma(props.background).luminance() >= 0.67 ? "rgba(0,0,0,0.6)" : "white"),
    },
    colorName : {
        color : props => (chroma(props.background).luminance() <= 0.08 ? "white" : "black")
    }


}

class ColorBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied : false
        }
        this.changeCopyState = this.changeCopyState.bind(this)
    }

    changeCopyState(){
        this.setState({copied: true}, ()=>{
            setTimeout(() => this.setState({copied:false}), 1500)
        })
    }

    render(){
        const {copied} = this.state
        const  { background, name, paletteId, colorId, showMore, classes } = this.props;
        const isDark = chroma(background).luminance() <= 0.1

        return (
            <CopyToClipboard text = {background} onCopy = {this.changeCopyState}>
                <div className = {`ColorBox`} style = {{backgroundColor : background}}>
                <div className = {`copy-overlay ${copied && "show"}`} style = {{backgroundColor : background}}></div>
                <div className = {`copy-msg ${copied && "show"} ${classes.copiedMessage}`}>
                    <h1> copied! </h1>
                    <p> {background} </p>
                </div>
                <div className = "copy-container" >
                    <div className = {`box-content ${classes.colorName}`}>
                            <span> {name} </span>
                    </div>
                    <button className = {`${classes.copyButton} copy-button`}> COPY </button>
                </div>
                { showMore === true && (
                <Link to = {`/palette/${paletteId}/${colorId}`} onClick = { (e) => e.stopPropagation()}>
                    <span className = {`${classes.moreButton} see-more`}> More </span>
                </Link>
                )}
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(styles)(ColorBox) 