import React, { useState, useEffect } from 'react';
import './components/CSS/reset.css';  
import './App.css';

// * Import components
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import CV from './components/CV';

import uniqid from 'uniqid';

const BASIC_DATA_FORM_ROLE = 'basicDataForm';
const EDUCATION_DATA_FORM_ROLE = 'educationDataForm';
const WORK_DATA_FORM_ROLE = 'workDataForm';

export default function App() {
  const [cvData, setCvData] = useState([]);
  const [workFormElems, setWorkFormElems] = useState([<Form key={uniqid()} formType="workDataForm" updateCVState={updateState} />])
  const [eduFormElems, setEduFormElems] = useState([<Form key={uniqid()} formType="educationDataForm" updateCVState={updateState}/>])


  function addSection(type) {
    if (type === 'education') {
      if (!cvData.map(cvDataObj => cvDataObj.role).some(elem => elem === 'educationDataForm')) return;
      setEduFormElems([...eduFormElems, <Form key={uniqid()} formType="educationDataForm" updateCVState={updateState}/>])
    }
    if (type === 'work') {
      if (!cvData.map(cvDataObj => cvDataObj.role).some(elem => elem === 'workDataForm')) return;
      setWorkFormElems([...workFormElems, <Form key={uniqid()} formType="workDataForm" updateCVState={updateState} />])
    } 
  }

  function updateState(formState) {
    setCvData(prevCvData => {
      const formIDs = prevCvData.map((cvForm) => cvForm.id);

      if (formIDs.includes(formState.id)) {
        const updateCVData = prevCvData.map(cvForm => {
          if (cvForm.id === formState.id) return formState;
          return cvForm;
        })
        return updateCVData;
      }
      return [...prevCvData, formState]
    });
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="forms">
          <Form formType="basicDataForm" updateCVState={updateState.bind(this)} />
          {workFormElems.map(element => element)}
          {eduFormElems.map(element => element)}
        </section>
        <CV addSection={addSection}
        cvData={cvData}
        cvDataBasic={cvData.filter(cvDataForm => cvDataForm.role === BASIC_DATA_FORM_ROLE)}
        cvDataEducation={cvData.filter(cvDataForm => cvDataForm.role === EDUCATION_DATA_FORM_ROLE)} 
        cvDataWork={cvData.filter(cvDataForm => cvDataForm.role === WORK_DATA_FORM_ROLE)}/>
      </main>
      <Footer />
    </div>
  );
}