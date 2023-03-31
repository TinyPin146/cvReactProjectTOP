import React, {Component} from "react";
import './CSS/Input.css'

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{[this.props.name.split('')[0].toUpperCase(), this.props.name.split('').splice(1).join('')].join('')}:</label>
                <input type={this.props.type} name={this.props.name} id={this.props.id}></input>
            </div>
        )
    }
}

export default Input