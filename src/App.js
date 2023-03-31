import React, {Component} from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import CV from './components/CV'

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Form />
          <CV />
        </main>
        <Footer />
      </div>
    );  
  }
}

export default App;
