import React, {Component} from "react";
import './CSS/Form.css'

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
                <Input updateParentState={this.props.updateParentState} type='text' name='name' />
                <button>Done</button>
            </form>
        )
    }
}

export default Form