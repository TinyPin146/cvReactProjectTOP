import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import CV from './components/CV'

class App extends Component {

  constructor(props) {
    super(props) 

    this.state = {
        cvDataStates: []
    }
    this.updateState = this.updateState.bind(this)
}

updateState(formState) {
  const {cvDataStates} = this.state;
  const formIDs = cvDataStates.map(cvForm => cvForm.id)

  if(formIDs.includes(formState.id)) {
    const updatedCVData = cvDataStates.map(cvForm => {
      if(cvForm.id === formState.id) return formState;
      return cvForm;
    })
    this.setState({cvDataStates: updatedCVData});
    return;
  }

  this.setState({cvDataStates: [...cvDataStates, formState]});
}


  render() {
    const {cvDataStates} = this.state;

    return (
      <div className="wrapper">
        <Header />
        <main>
          <section className='forms'>
            <Form formType='basicDataForm' updateParentState={this.updateState} />
            <Form formType='educationDataForm' updateParentState={this.updateState} />
            <Form formType='workDataForm' updateParentState={this.updateState} />
          </section>
          <section className='CV'>
            <CV formData={cvDataStates}/>
          </section>
        </main>
        <Footer />
      </div>
    );  
  }
}

export default App;
