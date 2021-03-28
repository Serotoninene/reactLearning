import React from 'react'

function PaletteFooter(props){
    const { paletteName, emoji } = props
    
    return(
        <div className = "PaletteFooter">
            <footer className = "Palette-footer">
                    <p> {paletteName} <span> {emoji} </span> </p>
            </footer>
        </div>
    )
}

export default PaletteFooter