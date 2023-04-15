import React, {Component} from "react";

export default class ExperienceCVSection extends Component {

    render() {
        const { data } = this.props;
        const inputData = data.inputStates ? data.inputStates : data;

        const workData = {
            companyName: 'The name of the company',
            positionTitle: 'The title of your position there',
            roleDescription: 'The description of your role',
            startOfWork: null,
            finishOfWork: null,
        }

        if (Array.isArray(inputData)) {
            inputData.forEach((input) => {
              if (input.for === 'company-name') workData.companyName = input.text;
              if (input.for === 'position-title') workData.positionTitle = input.text;
              if (input.for === 'role-description') workData.roleDescription = input.text;
              if (input.for === 'start-of-work')
                workData.startOfWork = input.text;
            if (input.for === 'finish-of-work')
            workData.finishOfWork = input.text;

            });
          }
      

        return (
            <section className="workExp-CV-section">
                <h3>{workData.companyName}</h3>
                <h3>{workData.positionTitle}</h3>
                <h4>{workData.roleDescription}</h4>
                <h4>{workData.startOfWork}</h4>
                <h4>{workData.finishOfWork}</h4>
            </section>
        )
    }
}