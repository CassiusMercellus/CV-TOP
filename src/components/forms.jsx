import React, { useState } from 'react';
import Name from './form-components/name';
import Skills from './form-components/skills';
import Education from './form-components/education';
import Experience from './form-components/experience';
import Summary from './form-components/summary';

export default function Forms({ setFormData, formData }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="flex flex-col border border-slate-700 h-screen">
        <div className="flex flex-row">
          <div
            className={toggleState === 1 ? "flex border border-slate-700 p-4 w-28 justify-center" : "flex p-4 w-28 justify-center"}
            onClick={() => toggleTab(1)}
          >
            Name
          </div>
          <div
            className={toggleState === 2 ? "flex border border-slate-700 p-4 w-28 justify-center" : "flex p-4 w-28 justify-center"}
            onClick={() => toggleTab(2)}
          >
            Skills
          </div>
          <div
            className={toggleState === 3 ? "flex border border-slate-700 p-4 w-28 justify-center" : "flex p-4 w-28 justify-center"}
            onClick={() => toggleTab(3)}
          >
            Education
          </div>
          <div
            className={toggleState === 4 ? "flex border border-slate-700 p-4 w-28 justify-center" : "flex p-4 w-28 justify-center"}
            onClick={() => toggleTab(4)}
          >
            Summary
          </div>
          <div
            className={toggleState === 5 ? "flex border border-slate-700 p-4 w-28 justify-center" : "flex p-4 w-28 justify-center"}
            onClick={() => toggleTab(5)}
          >
            Experience
          </div>
        </div>

        <div>
          <div className={toggleState === 1 ? "flex" : "hidden"}>
            <Name setFormData={setFormData} formData={formData} />
          </div>
          <div className={toggleState === 2 ? "flex" : "hidden"}>
            <Skills setFormData={setFormData} formData={formData} />
          </div>
          <div className={toggleState === 3 ? "flex" : "hidden"}>
            <Education setFormData={setFormData} formData={formData} />
          </div>
          <div className={toggleState === 4 ? "flex" : "hidden"}>
            <Summary setFormData={setFormData} formData={formData} />
          </div>
          <div className={toggleState === 5 ? "flex" : "hidden"}>
            <Experience setFormData={setFormData} formData={formData} />
          </div>
        </div>
      </div>
    </>
  );
}
