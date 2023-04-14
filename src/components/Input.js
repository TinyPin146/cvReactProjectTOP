import React, { Component } from 'react';
import './CSS/Input.css';

import uniqid from 'uniqid';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      for: null,
      text: '',
      id: uniqid(),
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { id } = this.state;
    const { name, updateFormState } = this.props;
    this.setState({
      for: name,
      text: e.target.value,
      id,
    });
    setTimeout(() => {
      updateFormState(this.state);
    }, 0);
  };

  render() {
    const { name, type } = this.props;
    const { text, id } = this.state;

    if (type === 'textarea') {
      return (
        <div className="CV--input">
          <label htmlFor={id}>
            {[name.split('')[0].toUpperCase(), name.split('').slice(1).join('')]
              .join('')
              .replace(/-/g, () => ' ')}
            :
          </label>
          <textarea
            value={text}
            type={type}
            name={name}
            id={id}
            onChange={this.handleChange}
          />
        </div>
      );
    }

    return (
      <div className="CV--input">
        <label htmlFor={id}>
          {[name.split('')[0].toUpperCase(), name.split('').slice(1).join('')]
            .join('')
            .replace(/-/g, () => ' ')}
          :
        </label>
        <input
          value={text}
          type={type}
          name={name}
          id={id}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
