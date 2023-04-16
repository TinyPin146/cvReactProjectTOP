import React, { Component } from 'react';
import './App.css';

// * Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import CV from './components/CV';

// * App component
class App extends Component {
  // * Class constructor
  constructor(props) {
    super(props);

    this.state = {
      cvData: [],
    };
    this.updateState = this.updateState.bind(this);
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
    const { cvData } = this.state;

    return (
      <div className="wrapper">
        <Header />
        <main>
          <section className="forms">
            <Form formType="basicDataForm" updateCVState={this.updateState} />
            <Form
              formType="educationDataForm"
              updateCVState={this.updateState}
            />
            <Form formType="workDataForm" updateCVState={this.updateState} />
          </section>
          <CV cvData={cvData} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
