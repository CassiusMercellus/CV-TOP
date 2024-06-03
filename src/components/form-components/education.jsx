import React, { useState, useEffect } from 'react';

export default function Education({ setFormData, formData }) {
  const initialEduData = {
    degree: '',
    school: '',
    durationStart: '',
    durationEnd: '',
    description: '',

    degree2: '',
    school2: '',
    durationStart2: '',
    durationEnd2: '',
    description2: '',

    degree3: '',
    school3: '',
    durationStart3: '',
    durationEnd3: '',
    description3: ''
  };
  const [eduData, setLocaleduData] = useState(formData?.eduData || initialEduData);

    
  useEffect(() => {
    setLocaleduData(formData?.eduData || initialEduData);
  }, [formData]);

  const handleChange = (e) => {
      const { id, value } = e.target;
      setLocaleduData({ ...eduData, [id]: value });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      setFormData((prevData) => ({ ...prevData, eduData }));
  };

  return (
    <div className="flex flex-col justify-center  w-full items-center p-4">
      <form className="flex flex-col justify-center m-4 w-full" onSubmit={handleSubmit}>
        <label>Certificate/Degree:</label>
        <input 
        className="border" 
        type="text" 
        id="degree" 
         
        value={eduData.degree}
        onChange={handleChange} />
        <label>School Name:</label>
        <input 
        className="border" 
        type="text" 
        id="school" 
         
        value={eduData.school}
        onChange={handleChange} />
        <label>Duration:</label>
        <div className="flex justify-between">
          <label>Start:</label>
          <input 
          className="border" 
          type="date" 
          id="durationStart"
          
          value={eduData.durationStart}  
          onChange={handleChange} />
          <label>End:</label>
          <input 
          className="border" 
          type="date" 
          id="durationEnd" 
           
          value={eduData.durationEnd}  
          onChange={handleChange} />
        </div>
        <label>Description:</label>
        <input 
        className="border" 
        type="text" 
        id="description" 
         
        value={eduData.description}
        onChange={handleChange} />
        
        <label className="mt-8">Certificate/Degree:</label>
        <input 
        className="border" 
        type="text" 
        id="degree2" 
         
        value={eduData.degree2}
        onChange={handleChange} />
        <label>School Name:</label>
        <input 
        className="border" 
        type="text" 
        id="school2" 
         
        value={eduData.school2}
        onChange={handleChange} />
        <label>Duration:</label>
        <div className="flex justify-between">
          <label>Start:</label>
          <input 
          className="border" 
          type="date" 
          id="durationStart2"
          
          value={eduData.durationStart2}  
          onChange={handleChange} />
          <label>End:</label>
          <input 
          className="border" 
          type="date" 
          id="durationEnd2" 
           
          value={eduData.durationEnd2}  
          onChange={handleChange} />
        </div>
        <label>Description:</label>
        <input 
        className="border" 
        type="text" 
        id="description2" 
         
        value={eduData.description2}
        onChange={handleChange} />
        
        <label className="mt-8">Certificate/Degree:</label>
        <input 
        className="border" 
        type="text" 
        id="degree3" 
         
        value={eduData.degree3}
        onChange={handleChange} />
        <label>School Name:</label>
        <input 
        className="border" 
        type="text" 
        id="school3" 
         
        value={eduData.school3}
        onChange={handleChange} />
        <label>Duration:</label>
        <div className="flex justify-between">
          <label>Start:</label>
          <input 
          className="border" 
          type="date" 
          id="durationStart3"
          
          value={eduData.durationStart3}  
          onChange={handleChange} />
          <label>End:</label>
          <input 
          className="border" 
          type="date" 
          id="durationEnd3" 
           
          value={eduData.durationEnd3}  
          onChange={handleChange} />
        </div>
        <label>Description:</label>
        <input 
        className="border" 
        type="text" 
        id="description3" 
         
        value={eduData.description3}
        onChange={handleChange} />
        <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
      </form>
    </div>
  );
}
