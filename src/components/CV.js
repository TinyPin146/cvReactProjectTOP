import React, { useState, useEffect } from 'react';
import './CSS/CV.css';
import BasicCVSection from './BasicCVSection';
import EducationCVSection from './EducationCVSection';
import ExperienceCVSection from './ExperienceCVSection';

import uniqid from 'uniqid';

function CV({cvDataBasic, cvDataEducation, cvDataWork, addSection}) {
  let educationSectionElemsArray = [];
  let workExperienceSectionElemsArray = [];
  
  educationSectionElemsArray = cvDataEducation.map(eduData => {
    const id = uniqid();
    return <EducationCVSection addSection={addSection} key={id} data={eduData} />
  });

  workExperienceSectionElemsArray = cvDataWork.map(workData => {
    const id = uniqid();
    return  <ExperienceCVSection addSection={addSection} key={id} data={workData} />
  })

  return (
    <section className="CV">
      <BasicCVSection  data={cvDataBasic[0] || 'No data'} />
      <div className='left-style'></div>
      <div className="content-CV-wrapper">
        <div className='work-section-header section-header'>Work experience:</div>
        <div className='work-experience-CV-wrapper'>
          {workExperienceSectionElemsArray.length > 0 ? workExperienceSectionElemsArray.map(comp => comp) : <ExperienceCVSection addSection={addSection} key="nodata" data="No data" />}
        </div>
        <div className='education-section-header section-header'>Education experience:</div>
        <div className="education-CV-wrapper">
          {educationSectionElemsArray.length > 0 ? educationSectionElemsArray.map(comp => comp) : <EducationCVSection addSection={addSection} key="nodata" data="No data" />}
        </div>
      </div>
    </section>
  );

}

export default React.memo(CV)