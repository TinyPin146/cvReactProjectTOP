import React, { useState, useEffect } from 'react';

import uniqid from 'uniqid';

function Input({updateFormState, type, name}) {  
  const [text, setText] = useState(''); 
  const [id, setId] = useState(uniqid());
  
  useEffect(() => {
    updateFormState({id, text, for: name});
  }, [text]);

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
          onChange={(e) => setText(e.target.value)}
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
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default Input;
