import React, { Component } from 'react';
import './CSS/CV.css';
import BasicCVSection from './BasicCVSection';
import EducationCVSection from './EducationCVSection';

const BASIC_DATA_FORM_ROLE = 'basicDataForm';
const EDUCATION_DATA_FORM_ROLE = 'educationDataForm';
const WORK_DATA_FORM_ROLE = 'workDataForm';
class CV extends Component {
  render() {
    const { cvData } = this.props;

    let basicData = null;
    const educationDataForms = [];
    const workDataForm = [];

    let educationSectionElemsArray = [];

    cvData.forEach((formDataObj) => {
      if (formDataObj.role === BASIC_DATA_FORM_ROLE) basicData = formDataObj;
      if (formDataObj.role === EDUCATION_DATA_FORM_ROLE)
        educationDataForms.push(formDataObj);
      if (formDataObj.role === WORK_DATA_FORM_ROLE)
        workDataForm.push(formDataObj);
    });

    if (educationDataForms.length > 0) {
      educationSectionElemsArray = educationDataForms.map((eduDataForm, i) => (
        <EducationCVSection key={i} data={eduDataForm} />
      ));
    } else {
      educationSectionElemsArray.push(
        <EducationCVSection key="nodata" data="No data" />
      );
    }
    console.log({ educationSectionElemsArray });

    return (
      <div className="CV">
        <BasicCVSection data={basicData || 'No data'} />
        <div className="education-CV-Data">
          {educationSectionElemsArray.map((comp) => comp)}
        </div>
      </div>
    );
  }
}

export default CV;
