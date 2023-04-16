import React, { Component } from 'react';
import './CSS/CV.css';
import BasicCVSection from './BasicCVSection';
import EducationCVSection from './EducationCVSection';
import ExperienceCVSection from './ExperienceCVSection';

const BASIC_DATA_FORM_ROLE = 'basicDataForm';
const EDUCATION_DATA_FORM_ROLE = 'educationDataForm';
const WORK_DATA_FORM_ROLE = 'workDataForm';
class CV extends Component {

  render() {
    const { cvData } = this.props;

    let basicData = null;
    const educationDataForms = [];
    const workDataForms = [];

    let educationSectionElemsArray = [];
    let workExperienceSectionElemsArray = [];

    cvData.forEach((formDataObj) => {
      if (formDataObj.role === BASIC_DATA_FORM_ROLE) basicData = formDataObj;
      if (formDataObj.role === EDUCATION_DATA_FORM_ROLE)
        educationDataForms.push(formDataObj);
      if (formDataObj.role === WORK_DATA_FORM_ROLE)
        workDataForms.push(formDataObj);
    });

    // * Creating education comps. based on how many there were
    if (educationDataForms.length > 0) {
      educationSectionElemsArray = educationDataForms.map((eduDataForm, i) => (
        <EducationCVSection key={i} data={eduDataForm} />
      ));
    } else {
      educationSectionElemsArray.push(
        <EducationCVSection key="nodata" data="No data" />
      );
    }

    // * Creating workExp. comps. based on how many there were
    if (workDataForms.length > 0) {
      workExperienceSectionElemsArray = workDataForms.map((workDataForm, i) => (
        <ExperienceCVSection key={i} data={workDataForm} />
      ));
    } else {
      workExperienceSectionElemsArray.push(
        <ExperienceCVSection key="nodata" data="No data" />
      );
    }

    return (
      <section className="CV">
        <BasicCVSection  data={basicData || 'No data'} />
        <div className='left-style'></div>
        <div className="content-CV-wrapper">
          <div className='work-experience-CV-wrapper'>
            {workExperienceSectionElemsArray.map(comp => comp)}
          </div>
          <div className="education-CV-wrapper">
            {educationSectionElemsArray.map(comp => comp)}
          </div>
        </div>
      </section>
    );
  }
}

export default CV;
