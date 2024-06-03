import React from 'react';
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Output({ data }) {
  const templateData = {
    name: 'John Doe',
    phone: '1234567890',
    email: 'john.doe@example.com',
    location: 'New York, NY',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',

    summary: 'This is a summary about John Doe. He is a professional with extensive experience in web development and software engineering.',

    degree: 'Masters Computer Science',
    school: 'Harvard',
    durationStart: '02/25/2020',
    durationEnd: '03/25/2024',
    description: 'Learned the fundamentals of Computer Science',

    degree2: 'Masters Computer Science',
    school2: 'Harvard',
    durationStart2: '02/25/2020',
    durationEnd2: '03/25/2024',
    description2: 'Learned the fundamentals of Computer Science',

    degree3: 'Masters Computer Science',
    school3: 'Harvard',
    durationStart3: '02/25/2020',
    durationEnd3: '03/25/2024',
    description3: 'Learned the fundamentals of Computer Science',

    jobRole: '',
    companyName: '',
    durationStartExp: '',
    durationEndExp: '',
    descriptionExp: '',

    jobRole2: '',
    companyName2: '',
    durationStartExp2: '',
    durationEndExp2: '',
    descriptionExp2: '',

    jobRole3: '',
    companyName3: '',
    durationStartExp3: '',
    durationEndExp3: '',
    descriptionExp3: '',

    skill1: '',
    skill1desc: '',

    skill2: '',
    skill2desc: '',

    skill3: '',
    skill3desc: '',

    skill4: '',
    skill4desc: '',

    skill5: '',
    skill5desc: '',

    skill6: '',
    skill1desc: '',

    skill6: '',
    skill1desc: '',

    skill7: '',
    skill7desc: '',

    skill8: '',
    skill8desc: '',
  };

  const displayData = data || templateData;

  return (
    <>

      {/* Name */}
      <div className="mx-12 w-full">
        <div className="text-2xl font-bold text-teal-400 my-6">{displayData.nameData.name ? displayData.nameData.name : "John Doe"}</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="flex items-center">
            <FaPhoneAlt /> 
            <p className="mx-2 text-base">{displayData.nameData.phone ? displayData.nameData.phone : "1234567890"}</p>
          </div>
          <div className="flex items-center">
            <MdEmail />
            <p className="mx-2 text-base">{displayData.nameData.email ? displayData.nameData.email : "john.doe@example.com"}</p>
          </div>
          <div className="flex items-center">
            <FaLocationDot />
            <p className="mx-2 text-base">{displayData.nameData.location ? displayData.nameData.location : "New York, NY"}</p>
          </div>
          <div className="flex items-center">
            <FaLinkedin />
            <p className="mx-2 text-base">{displayData.nameData.linkedin ? displayData.nameData.linkedin : "linkedin.com/in/johndoe"}</p>
          </div>
          <div className="flex items-center">
            <FaGithub />
            <p className="mx-2 text-base">{displayData.nameData.github ? displayData.nameData.github : "github.com/johndoe"}</p>
          </div>
        </div>

        {/* Summary */}
        <div className="text-xl font-bold text-slate-700 my-6">
          <h1>Summary</h1>
          <div className="w-full h-1 bg-slate-700"></div>
          {displayData.summary ? <p className="text-sm">{displayData.summary}</p> : <p className="text-sm">No summary available</p>}
        </div>

        {/* Experience */}
        <div className="text-xl font-bold text-slate-700 my-6">
  <h1>Experience</h1>
  <div className="w-full h-1 bg-slate-700"></div>

  {/* Job 1 */}
  <div className="flex justify-between">
    <div className="flex flex-col">
      <p className="text-base">{displayData.expData ? displayData.expData.jobRole : 'Web Developer'}</p>
      <p className="text-sm text-teal-400">{displayData.expData ? displayData.expData.companyName : 'Apple'}</p>
    </div>
    <p className="text-sm">
      {displayData.expData ? (displayData.expData.durationStartExp ? displayData.expData.durationStartExp : 'Start') : 'Start'} - 
      {displayData.expData ? (displayData.expData.durationEndExp ? displayData.expData.durationEndExp : 'End') : 'End'}
    </p>
  </div>
  <p className="text-sm">{displayData.expData ? displayData.expData.descriptionExp : 'Description'}</p>

  {/* Job 2 */}
  <div className="flex justify-between">
    <div className="flex flex-col">
      <p className="text-base">{displayData.expData ? displayData.expData.jobRole2 : ''}</p>
      <p className="text-sm text-teal-400">{displayData.expData ? displayData.expData.companyName2 : ''}</p>
    </div>
    <p className="text-sm">
      {displayData.expData ? (displayData.expData.durationStartExp2 ? displayData.expData.durationStartExp2 : '') : ''}
      {displayData.expData && displayData.expData.durationEndExp2 ? ' - ' : ''}
      {displayData.expData ? (displayData.expData.durationEndExp2 ? displayData.expData.durationEndExp2 : '') : ''}
    </p>
  </div>
  <p className="text-sm">{displayData.expData ? displayData.expData.descriptionExp2 : ''}</p>

  {/* Job 3 */}
  <div className="flex justify-between">
    <div className="flex flex-col">
      <p className="text-base">{displayData.expData ? displayData.expData.jobRole3 : ''}</p>
      <p className="text-sm text-teal-400">{displayData.expData ? displayData.expData.companyName3 : ''}</p>
    </div>
    <p className="text-sm">
      {displayData.expData ? (displayData.expData.durationStartExp3 ? displayData.expData.durationStartExp3 : '') : ''}
      {displayData.expData && displayData.expData.durationEndExp3 ? ' - ' : ''}
      {displayData.expData ? (displayData.expData.durationEndExp3 ? displayData.expData.durationEndExp3 : '') : ''}
    </p>
  </div>
  <p className="text-sm">{displayData.expData ? displayData.expData.descriptionExp3 : ''}</p>
</div>

        {/* Education */}
        <div className="text-xl font-bold text-slate-700 my-6">
  <h1>Education</h1>
  <div className="w-full h-1 bg-slate-700"></div>

  {/* Education 1 */}
  <div className="flex justify-between">
    <div className="flex flex-col">
      <p className="text-base">{displayData.eduData ? displayData.eduData.degree : 'Masters Computer Science'}</p>
      <p className="text-sm text-teal-400">{displayData.eduData ? displayData.eduData.school : 'Harvard'}</p>
    </div>
    <p className="text-sm">
      {displayData.eduData ? (displayData.eduData.durationStart ? displayData.eduData.durationStart : 'Start') : 'Start'} - 
      {displayData.eduData ? (displayData.eduData.durationEnd ? displayData.eduData.durationEnd : 'End') : 'End'}
    </p>
  </div>
  <p className="text-sm">{displayData.eduData ? displayData.eduData.description : 'Description'}</p>

  {/* Education 2 */}
  <div className="flex justify-between">
    <div className="flex flex-col">
      <p className="text-base">{displayData.eduData ? displayData.eduData.degree2 : ''}</p>
      <p className="text-sm text-teal-400">{displayData.eduData ? displayData.eduData.school2 : ''}</p>
    </div>
    <p className="text-sm">
      {displayData.eduData ? (displayData.eduData.durationStart2 ? displayData.eduData.durationStart2 : '') : ''}
      {displayData.eduData && displayData.eduData.durationEnd2 ? ' - ' : ''}
      {displayData.eduData ? (displayData.eduData.durationEnd2 ? displayData.eduData.durationEnd2 : '') : ''}
    </p>
  </div>
  <p className="text-sm">{displayData.eduData ? displayData.eduData.description2 : ''}</p>

  {/* Education 3 */}
  <div className="flex justify-between">
    <div className="flex flex-col">
      <p className="text-base">{displayData.eduData ? displayData.eduData.degree3 : ''}</p>
      <p className="text-sm text-teal-400">{displayData.eduData ? displayData.eduData.school3 : ''}</p>
    </div>
    <p className="text-sm">
      {displayData.eduData ? (displayData.eduData.durationStart3 ? displayData.eduData.durationStart3 : '') : ''}
      {displayData.eduData && displayData.eduData.durationEnd3 ? ' - ' : ''}
      {displayData.eduData ? (displayData.eduData.durationEnd3 ? displayData.eduData.durationEnd3 : '') : ''}
    </p>
  </div>
  <p className="text-sm">{displayData.eduData ? displayData.eduData.description3 : ''}</p>
</div>

        {/* Skills */}

        <div className="text-xl font-bold text-slate-700 my-6">
  <h1>Skills</h1>
  <div className="w-full h-1 bg-slate-700"></div>
  <ol>
    {/* Skill 1 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill1}</div>
        <div className="text-sm">{displayData.skillData.skill1desc}</div>
      </li> 
      : 
      <li className="text-sm">Skill Issue?</li>
    }

    {/* Skill 2 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill2}</div>
        <div className="text-sm">{displayData.skill2desc}</div>
      </li> 
      : 
      <li className="text-sm">Skill Issue?</li>
    }
    
    {/* Skill 3 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill3}</div>
        <div className="text-sm">{displayData.skillData.skill3desc}</div>
      </li> 
      : 
      <li className="text-sm"></li>
    }
    
    {/* Skill 4 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill4}</div>
        <div className="text-sm">{displayData.skillData.skill4desc}</div>
      </li> 
      : 
      <li className="text-sm"></li>
    }
    
    {/* Skill 5 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill5}</div>
        <div className="text-sm">{displayData.skillData.skill5desc}</div>
      </li> 
      : 
      <li className="text-sm"></li>
    }
    
    {/* Skill 6 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill6}</div>
        <div className="text-sm">{displayData.skillData.skill6desc}</div>
      </li> 
      : 
      <li className="text-sm"></li>
    }
    
    {/* Skill 7 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill7}</div>
        <div className="text-sm">{displayData.skillData.skill7desc}</div>
      </li> 
      : 
      <li className="text-sm"></li>
    }
    
    {/* Skill 8 */}
    {displayData.skillData ? 
      <li className="flex flex-col"> 
        <div className="text-sm">{displayData.skillData.skill8}</div>
        <div className="text-sm">{displayData.skillData.skill8desc}</div>
      </li> 
      : 
      <li className="text-sm"></li>
    }
  </ol>
</div>

      </div>
    </>
  );
}
