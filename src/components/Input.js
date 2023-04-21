import React, { Component, useState, useEffect } from 'react';

import uniqid from 'uniqid';

class Input2 extends Component {
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

function Input({updateFormState, type, name}) {  
  const [text, setText] = useState('');
  const ID = uniqid();
  
  useEffect(() => {
    updateFormState({id: ID, text, for: name});
  }, [text]);

  if (type === 'textarea') {
    return (
      <div className="CV--input">
        <label htmlFor={ID}>
          {[name.split('')[0].toUpperCase(), name.split('').slice(1).join('')]
            .join('')
            .replace(/-/g, () => ' ')}
          :
        </label>
        <textarea
          value={text}
          type={type}
          name={name}
          id={ID}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div className="CV--input">
      <label htmlFor={ID}>
        {[name.split('')[0].toUpperCase(), name.split('').slice(1).join('')]
          .join('')
          .replace(/-/g, () => ' ')}
        :
      </label>
      <input
        value={text}
        type={type}
        name={name}
        id={ID}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Input;
