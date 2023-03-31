import React, {Component} from "react";
import './CSS/Form.css'

import uniqid from 'uniqid';

import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props) 

        this.state = {

        }
    }

    render() {
        return(
            <form>
                <Input type='text' name='name' id={uniqid()}/>
            </form>
        )
    }
}

export default Form