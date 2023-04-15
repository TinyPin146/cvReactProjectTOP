import React, {Component} from "react";

export default class EducationCVSection extends Component {
    
    render() {
        const {data} = this.props; 

        const inputData = data.inputStates ? data.inputStates : data;
        console.log({inputData});

        return (
            <h1>Hello</h1>
        )
    }
}