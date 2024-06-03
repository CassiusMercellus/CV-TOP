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
    github: 'github.com/johndoe'
  };

  const displayData = data || templateData;

  return (
    <>
      <div className="mx-12 w-full">
        <div className="text-2xl font-bold text-teal-400 my-6">{displayData.name}</div>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="flex items-center">
            <FaPhoneAlt /> 
            <p className="mx-2 text-base">{displayData.phone}</p>
          </div>
          <div className="flex items-center">
            <MdEmail />
            <p className="mx-2 text-base">{displayData.email}</p>
          </div>
          <div className="flex items-center">
            <FaLocationDot />
            <p className="mx-2 text-base">{displayData.location}</p>
          </div>
          <div className="flex items-center">
            <FaLinkedin />
            <p className="mx-2 text-base">{displayData.linkedin}</p>
          </div>
          <div className="flex items-center">
            <FaGithub />
            <p className="mx-2 text-base">{displayData.github}</p>
          </div>
        </div>

        <div className="text-xl font-bold text-slate-700 my-6">
          <h1>Summary</h1>
          <div className="w-full h-1 bg-slate-700"></div>
          <p className="text-sm">stuff</p>
        </div>
        <div className="text-xl font-bold text-slate-700 my-6">
          <h1>Experience</h1>
          <div className="w-full h-1 bg-slate-700"></div>
          <p className="text-sm">stuff</p>
        </div>
        <div className="text-xl font-bold text-slate-700 my-6">
          <h1>Education</h1>
          <div className="w-full h-1 bg-slate-700"></div>
          <p className="text-sm">stuff</p>
        </div>
        <div className="text-xl font-bold text-slate-700 my-6">
          <h1>Skills</h1>
          <div className="w-full h-1 bg-slate-700"></div>
          <p className="text-sm">stuff</p>
        </div>
      </div>
    </>
  );
}
