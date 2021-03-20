import React, { Component } from 'react'

class DogList extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        let dogs = this.props.dogs.map((el)=> {
            return (
                <div className = "col-12 col-md-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
                    <h2> {el.name} - {el.age} </h2>
                    <img src = {el.src} alt = {el.name} className = "img-fluid"/>
                </div>
            )
        })

        return (
            <div> 
                <h1 className = "container text-center "> Dog List</h1>
                <div className = "row">
                   {dogs}
                </div>
            </div>
        )
    }
}

export default DogList