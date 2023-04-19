import React, { Component } from 'react';
import './components/CSS/reset.css'
import './App.css';

// * Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import CV from './components/CV';

import uniqid from 'uniqid';

// * App component
class App extends Component {
  // * Class constructor
  constructor(props) {
    super(props);

    this.addSection = this.addSection.bind(this);
    this.updateState = this.updateState.bind(this);

    this.state = {
      cvData: [],
      workFormElems: [<Form key={uniqid()} formType="workDataForm" updateCVState={this.updateState} />],
      eduFormElems: [<Form key={uniqid()} formType="educationDataForm" updateCVState={this.updateState}/>],
    };
  }

  addSection(type) {
    if (type === 'education') {
      if (!this.state.cvData.map(cvDataObj => cvDataObj.role).some(elem => elem === 'educationDataForm')) return;
      this.setState({eduFormElems: [...this.state.eduFormElems, <Form key={uniqid()} formType="educationDataForm" updateCVState={this.updateState}/>]})
    }
    if (type === 'work') {
      if (!this.state.cvData.map(cvDataObj => cvDataObj.role).some(elem => elem === 'workDataForm')) return;
      this.setState({workFormElems: [...this.state.workFormElems, <Form key={uniqid()} formType="workDataForm" updateCVState={this.updateState} />]})
    } 
  }


  // * Update CV info state
  updateState(formState) {
    const { cvData: cvDataStates } = this.state;
    const formIDs = cvDataStates.map((cvForm) => cvForm.id);

    if (formIDs.includes(formState.id)) {
      const updatedCVData = cvDataStates.map((cvForm) => {
        if (cvForm.id === formState.id) return formState;
        return cvForm;
      });
      this.setState({ cvData: updatedCVData });
      return;
    }

    this.setState({ cvData: [...cvDataStates, formState] });
  }


  render() {
    const { cvData, eduFormElems, workFormElems } = this.state;


    return (
      <div className="wrapper">
        <Header />
        <main>
          <section className="forms">
            <Form formType="basicDataForm" updateCVState={this.updateState} />
            {workFormElems.map(element => element)}
            {eduFormElems.map(element => element)}
          </section>
          <CV addSection={this.addSection} cvData={cvData} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
