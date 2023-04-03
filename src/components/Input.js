import React, {Component} from "react";
import './CSS/Input.css'

import uniqid from 'uniqid';

class Input extends Component {
    constructor(props) {
        super(props)

        this.state = {
                for: null,
                text: '',
                id: uniqid(),
        }
    }

    handleChange = (e) => {
        this.setState({
            for: this.props.name,
            text: e.target.value,
            id: this.state.id
        });
        setTimeout(() => {
            this.props.updateParentState(this.state);   

        },0)
      };
    
    render() {
        const {id, name, type} = this.props
        return (
            <div className="CV--input">
                <label htmlFor={id}>{[name.split('')[0].toUpperCase(), name.split('').splice(1).join('')].join('')}:</label>
                <input type={type} name={name} id={id} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Input