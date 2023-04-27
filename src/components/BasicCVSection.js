import React, { useState, useEffect } from 'react';
import image from '../assets/images/P1080192_07.jpg'

export default function BasicCVSection({data}) {
  const [isHovered, setIsHovered] = useState(false);
  const inputData = data.inputStates || '';
  const toggleFormVis = data.toggleFormVis;

  const basicData = {
    firstName: 'Your first name',
    lastName: 'Your last name',
    emailAddress: 'Your email address',
    phoneNumber: 'Your phone number',
  };

  if (Array.isArray(inputData)) {
    console.log('sorting input...');
    inputData.forEach((input) => {
      if (input.for === 'first-name') basicData.firstName = input.text;
      if (input.for === 'last-name') basicData.lastName = input.text;
      if (input.for === 'email-address') basicData.emailAddress = input.text;
      if (input.for === 'phone-number') basicData.phoneNumber = input.text;
    });
  }

  return (
    <section onMouseEnter={() => setIsHovered(!isHovered)} onMouseLeave={() => setIsHovered(!isHovered)} className="basic-CV-section">
      <div className='image'>
        <img src={image} alt='Applicant portrait'></img>
      </div>
      <div className='name'>
        <h2>{basicData.firstName}</h2>
        <h2>{basicData.lastName}</h2>
      </div>
      <div className='contact'>
        <h3>{basicData.emailAddress}</h3>
        <h3>{basicData.phoneNumber}</h3>
      </div>
      <div className={isHovered ? 'buttons' : 'buttons hidden'}>
        <button onClick={() => toggleFormVis()}>Edit this section</button>
      </div>

    </section>
  );
}