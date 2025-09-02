import React, { useState } from 'react';
import './Join.css'; // Create this CSS file for green styling

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    familyMembers: '',
    emergencyMessage: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Thank you for joining! Well get in touch soon.");
    // You can send this data to your backend here
  };

  return (
    <div className="join-container">
      <h1>Join Our NGO Family</h1>
      <p>Become a part of a compassionate community making a difference together.</p>

      <form onSubmit={handleSubmit} className="join-form">
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Number of Family Members Joining:
          <input
            type="number"
            name="familyMembers"
            min="1"
            required
            value={formData.familyMembers}
            onChange={handleChange}
          />
        </label>

        <label>
          Emergency Message (if any):
          <textarea
            name="emergencyMessage"
            placeholder="Mention any urgent concern or help request..."
            value={formData.emergencyMessage}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Join Now</button>
      </form>
    </div>
  );                         
};

export default Join; 