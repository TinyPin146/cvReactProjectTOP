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
        inputStates: []
    }
    this.updateState = this.updateState.bind(this)
}

updateState(childState) {
  const {inputStates} = this.state;
  const inputIDs = inputStates.map(input => input.id)
  if (inputIDs.includes(childState.id)) {
      const updatedInputs = inputStates.map(state => {
        if (state.id === childState.id) return childState;
        return state;
      });
      this.setState({ inputStates: updatedInputs});
      return;
  };

  this.setState({ inputStates: [...this.state.inputStates, childState] });
}


  render() {
    const {inputStates} = this.state;

    console.log(inputStates);
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Form updateParentState={this.updateState} />
          <CV formData={inputStates}/>
        </main>
        <Footer />
      </div>
    );  
  }
}

export default App;
