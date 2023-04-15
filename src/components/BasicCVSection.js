import React, { Component } from 'react';

export default class BasicCVSection extends Component {
  render() {
    const { data } = this.props;
    const inputData = data.inputStates || '';

    const basicData = {
      firstName: 'Your first name',
      lastName: 'Your last name',
      emailAddress: 'Your email address',
      phoneNumber: 'Your phone number',
    };

    if (Array.isArray(inputData)) {
      inputData.forEach((input) => {
        if (input.for === 'first-name') basicData.firstName = input.text;
        if (input.for === 'last-name') basicData.lastName = input.text;
        if (input.for === 'email-address') basicData.emailAddress = input.text;
        if (input.for === 'phone-number') basicData.phoneNumber = input.text;
      });
    }

    return (
      <section className="basic-CV-section">
        <h2>{basicData.firstName}</h2>
        <h2>{basicData.lastName}</h2>
        <h3>{basicData.emailAddress}</h3>
        <h3>{basicData.phoneNumber}</h3>
      </section>
    );
  }
}