import React, { useState } from 'react';
import './App.css';
import Output from './components/output';
import Forms from './components/forms';

function App() {
  const [formData, setFormData] = useState(null);

  return (
    <>
      <div className="flex">
        <Forms setFormData={setFormData} />
        <Output data={formData} />
      </div>
    </>
  );
}

export default App;
