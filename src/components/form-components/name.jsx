import React, { useState,useEffect } from 'react';

export default function Name({ setFormData, formData }) {
  const initialNameData = {
    name: '',
    phone: '',
    email: '',
    location: '',
    linkedin: '',
    github: ''
  };

  const [nameData, setLocalnameData] = useState(formData?.expData || initialNameData);

  useEffect(() => {
    setLocalnameData(formData?.expData || initialNameData);
  }, [formData]);

  const handleChange = (e) => {
      const { id, value } = e.target;
      setLocalnameData({ ...nameData, [id]: value });
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      setFormData((prevData) => ({ ...prevData, nameData }));
  };

  return (
    <form className="flex flex-col justify-center m-4 w-full" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        className="border"
        type="text"
        id="name"
        required
        value={nameData.name}
        onChange={handleChange}
      />
      <label>Enter your phone number:</label>
      <input
        className="border"
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        required
        value={nameData.phone}
        onChange={handleChange}
      />
      <label>Enter your email:</label>
      <input
        className="border"
        type="email"
        id="email"
        name="email"
        required
        value={nameData.email}
        onChange={handleChange}
      />
      <label>Location:</label>
      <input
        className="border"
        type="text"
        id="location"
        required
        value={nameData.location}
        onChange={handleChange}
      />
      <label>LinkedIn:</label>
      <input
        className="border"
        type="text"
        id="linkedin"
        value={nameData.linkedin}
        onChange={handleChange}
      />
      <label>Github:</label>
      <input
        className="border"
        type="text"
        id="github"
        value={nameData.github}
        onChange={handleChange}
      />
      <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
    </form>
  );
}
