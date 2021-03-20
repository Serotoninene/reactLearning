import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class DogDetails extends Component{
          super(props)
        this.state = {}
    }

    render(){
        let dog = this.props.dog; 
        console.log (dog);

        return (
            <div className = "DogDetails row">
                <div className = "col-11 col-lg-5">
                    <div className = "DogDetails-card card">
                        <img src = {dog.src} alt = {dog.name} className='card-img-top px-3 py-2'/>
                        <div className = "card-body text-center">
                            <h2 className = 'card-title'> {dog.name}</h2>
                            <h4 className = 'card-subtitle text-muted'>{dog.age} years old</h4>
                        </div>
                        <ul className = "list-group list-group-flush">
                            {dog.facts.map( (el, idx) => {
                                return <li className = "list-group-item text-center" key = {idx}> {el} </li>
                            })}
                            <li> <Link to = "/dogs"> GO BACK </Link></li>
                        </ul>
                        
                    </div>
                </div>

            </div>
        )
    }
}

export default DogDetails