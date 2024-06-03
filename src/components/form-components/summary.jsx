import React, { useState, useEffect } from 'react';

export default function Summary({ setFormData, formData }) {
  const initialSummary = formData?.summary || '';

  const [summary, setSummary] = useState(initialSummary);

  useEffect(() => {
    setSummary(formData?.summary || '');
  }, [formData?.summary]);

  const handleChange = (e) => {
    setSummary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, summary }));
  };

  return (
    <>
      <form className="flex flex-col justify-center m-4 w-full" onSubmit={handleSubmit}>
        <label>Summary:</label>
        <textarea
          className="border h-64"
          name="summary"
          id="summary"
          value={summary}
          onChange={handleChange}
        ></textarea>
        <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">
          Add
        </button>
      </form>
    </>
  );
}
