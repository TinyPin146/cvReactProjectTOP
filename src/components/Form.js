import React, { Component, useState, useEffect } from 'react';
import './CSS/Form.css';

import Input from './Input';

import uniqid from 'uniqid';

const Form = ({formType, updateCVState}) => {
  const [id, setId] = useState(uniqid());
  const [inputStates, setInputStates] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

 const toggleFormVis = () => {
  setIsHidden(!!isHidden);
}

  const updateFormState = (childState) => {
    const inputIDs = inputStates.map((input) => input.id);

    // * Updating input state if already exists
    if (inputIDs.includes(childState.id)) {
      const updatedInputs = inputStates.map((state) => {
        if (state.id === childState.id) return childState;
        return state;
      });
      setInputStates(updatedInputs)
      return;
    }

    // * Adding input if new
    setInputStates([...inputStates, childState]);
  }

  const basicDataForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsHidden(true);
        updateCVState({id, inputStates, role: formType, toggleFormVis});
      }}
      className={isHidden ? 'hidden' : ''}
    >
      <legend>Name and contact information:</legend>
      <Input
        updateFormState={updateFormState}
        type="text"
        name="first-name"
      />
      <Input
        updateFormState={updateFormState}
        type="text"
        name="last-name"
      />
      <Input
        updateFormState={updateFormState}
        type="email"
        name="email-address"
      />
      <Input
        updateFormState={updateFormState}
        type="tel"
        name="phone-number"
      />
      <button type="submit">Done</button>
    </form>
  );

  const educationDataForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsHidden(true);
        updateCVState({id, inputStates, role: formType, toggleFormVis});
      }}
      className={isHidden ? 'hidden' : ''}
    >
      <Input
        updateFormState={updateFormState}
        type="text"
        name="school-name"
      />
      <Input
        updateFormState={updateFormState}
        type="text"
        name="title-of-study"
      />
      <Input
        updateFormState={updateFormState}
        type="number"
        name="start-of-studies"
      />
      <Input
        updateFormState={updateFormState}
        type="number"
        name="finish-of-studies"
      />
      <button type="submit">Done</button>
    </form>
  );

  const workDataForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsHidden(true);
        updateCVState({id, inputStates, role: formType, toggleFormVis});
      }}
      className={isHidden ? 'hidden' : ''}
    >
      <Input
        updateFormState={updateFormState}
        type="text"
        name="company-name"
      />
      <Input
        updateFormState={updateFormState}
        type="text"
        name="position-title"
      />
      <Input
        updateFormState={updateFormState}
        type="textarea"
        name="role-description"
      />
      <Input
        updateFormState={updateFormState}
        type="number"
        name="start-of-work"
      />
      <Input
        updateFormState={updateFormState}
        type="number"
        name="finish-of-work"
      />
      <button type="submit">Done</button>
    </form>
  );

  switch (formType) {
    case 'basicDataForm':
      return basicDataForm;
    case 'educationDataForm':
      return educationDataForm;
    case 'workDataForm':
      return workDataForm;

    default:
      throw new Error('Something is not working')
  }
}

export default Form;