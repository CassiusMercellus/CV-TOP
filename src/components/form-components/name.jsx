import React, { useState } from 'react';

export default function Name({ setFormData }) {
  const [formData, setLocalFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    linkedin: '',
    github: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLocalFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formData);
  };

  return (
    <form className="flex flex-col justify-center m-4 w-full" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        className="border"
        type="text"
        id="name"
        required
        value={formData.name}
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
        value={formData.phone}
        onChange={handleChange}
      />
      <label>Enter your email:</label>
      <input
        className="border"
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <label>Location:</label>
      <input
        className="border"
        type="text"
        id="location"
        required
        value={formData.location}
        onChange={handleChange}
      />
      <label>LinkedIn:</label>
      <input
        className="border"
        type="text"
        id="linkedin"
        value={formData.linkedin}
        onChange={handleChange}
      />
      <label>Github:</label>
      <input
        className="border"
        type="text"
        id="github"
        value={formData.github}
        onChange={handleChange}
      />
      <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
    </form>
  );
}
