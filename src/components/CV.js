import React, { Component } from 'react';
import './CSS/CV.css';
import BasicCVSection from './BasicCVSection';
import EducationCVSection from './EducationCVSection';
import ExperienceCVSection from './ExperienceCVSection';

const BASIC_DATA_FORM_ROLE = 'basicDataForm';
const EDUCATION_DATA_FORM_ROLE = 'educationDataForm';
const WORK_DATA_FORM_ROLE = 'workDataForm';
class CV extends Component {
  constructor(props) {
    super(props)

    this.deleteSection = this.deleteSection.bind(this);
  }

  // ! Delete section function
  deleteSection() {
    console.log('delete section');
  }

  render() {
    const { cvData, addSection } = this.props;

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
        <EducationCVSection addSection={addSection} deleteSection={this.deleteSection} key={i} data={eduDataForm} />
      ));
    } else {
      educationSectionElemsArray.push(
        <EducationCVSection addSection={addSection} deleteSection={this.deleteSection} key="nodata" data="No data" />
      );
    }

    // * Creating workExp. comps. based on how many there were
    if (workDataForms.length > 0) {
      workExperienceSectionElemsArray = workDataForms.map((workDataForm, i) => (
        <ExperienceCVSection addSection={addSection} deleteSection={this.deleteSection} key={i} data={workDataForm} />
      ));
    } else {
      workExperienceSectionElemsArray.push(
        <ExperienceCVSection addSection={addSection} deleteSection={this.deleteSection} key="nodata" data="No data" />
      );
    }

    return (
      <section className="CV">
        <BasicCVSection  data={basicData || 'No data'} />
        <div className='left-style'></div>
        <div className="content-CV-wrapper">
          <div className='work-section-header section-header'>Work experience:</div>
          <div className='work-experience-CV-wrapper'>
            {workExperienceSectionElemsArray.map(comp => comp)}
          </div>
          <div className='education-section-header section-header'>Education experience:</div>
          <div className="education-CV-wrapper">
            {educationSectionElemsArray.map(comp => comp)}
          </div>
        </div>
      </section>
    );
  }
}

export default CV;