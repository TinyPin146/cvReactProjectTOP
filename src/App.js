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
        inputs: []
    }
    this.updateState = this.updateState.bind(this)
}

updateState(childState) {
  const currentInputObjects = this.state.inputs;
  const inputIDs = currentInputObjects.map(input => input.id)
  if (inputIDs.includes(childState.id)) {
      const inputIndex = currentInputObjects.findIndex(input => input.id === childState.id)
      const updatedInputs = currentInputObjects.splice(inputIndex, 1, childState)
      this.setState({ inputs: updatedInputs});
      console.log(this.state.inputs);
      return;
  };

  this.setState({ inputs: [...this.state.inputs, childState] });
  console.log(this.state.inputs);
}


  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Form updateParentState={this.updateState} />
          <CV />
        </main>
        <Footer />
      </div>
    );  
  }
}

export default App;
