import React, {Component} from 'react';
import './App.css';

import uniqid from 'uniqid';


import Header from './components/Header';
import Footer from './components/Footer'
import Input from './components/Input';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <main>
          <Input type='text' name='name' id={uniqid()}/>
        </main>
        <Footer />
      </div>
    );  
  }
}

export default App;
