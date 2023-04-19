import React, { Component } from 'react';

export default class EducationCVSection extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovered: false,
    }
  }

  render() {
    const { data, addSection } = this.props;
    const inputData = data.inputStates ? data.inputStates : data;
    const toggleFormVis = data.toggleFormVis;

    const eduData = {
      schoolName: 'The name of the school',
      titleOfStudy: 'The title of your studies',
      startOfStudy: 'Start of studies',
      finishOfStudy: 'Finish of studies',
    };

    if (Array.isArray(inputData)) {
      inputData.forEach((input) => {
        if (input.for === 'school-name') eduData.schoolName = input.text;
        if (input.for === 'title-of-study') eduData.titleOfStudy = input.text;
        if (input.for === 'start-of-studies') eduData.startOfStudy = input.text;
        if (input.for === 'finish-of-studies')
          eduData.finishOfStudy = input.text;
      });
    }

    return (
      <section onMouseEnter={() => this.setState({isHovered: true})} onMouseLeave={() => this.setState({isHovered: false})} className="edu-CV-section CV-content-section">
        <div className='content center-column'>
          <h3>{eduData.schoolName}</h3>
          <h3>{eduData.titleOfStudy}</h3>
        </div>
        <div className='date center-column'>
          <h4>{eduData.finishOfStudy}</h4>
          -
          <h4>{eduData.startOfStudy}</h4>
        </div>
        <div className={this.state.isHovered ? 'buttons' : 'buttons hidden'}>
          <button onClick={() => {
                        if (!toggleFormVis) return;
                        toggleFormVis();
                    }}>Edit this section</button>
          <button onClick={() => addSection('education')}>Add new section</button>
        </div>
      </section>
    );
  }
}
