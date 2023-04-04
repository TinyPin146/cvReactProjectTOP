import React, {Component} from "react";
import './CSS/CV.css'

class CV extends Component {

    render() {
        const {formData} = this.props;
        const formDataElements = formData.map(formData => {
            return formData.inputStates.map(inputData => {
                return <p key={inputData.id}>{inputData.text}</p>
            })
        })

        return (
            <div className="CV">
                {formDataElements}
            </div>
        )
    }
}

export default CV;