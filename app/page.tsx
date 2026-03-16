"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  strength: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({ name: "", strength: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>
        {formData.name} has {formData.strength}
      </h1>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Strength: </label>
          <input
            type="text"
            name="strength"
            value={formData.strength}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <h3>Output:</h3>
      <p>Name: {formData.name}</p>
      <p>Strength: {formData.strength}</p>
    </div>
  );
}

export default App;
