import React, {Component} from "react";
import './CSS/CV.css'

class CV extends Component {

    render() {
        const {formData} = this.props;
        const formDataElements = formData.map(data => {
            return <p key={data.id}>{data.text}</p>
        })

        return (
            <div className="CV">
                {formDataElements}
            </div>
        )
    }
}

export default CV;