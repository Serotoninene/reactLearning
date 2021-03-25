import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class PaletteList extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const paletteList = this.props.palettes.map((e, idx) => (
            <li key= {idx} > <Link to = {`/palette/${e.id}`}>{e.paletteName} </Link></li>
        ))

        return (
            <div>
                <ul>
                    {paletteList}
                </ul>
            </div>
        )
    }
}

export default PaletteList