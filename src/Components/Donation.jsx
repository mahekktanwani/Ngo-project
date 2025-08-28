import React, { useState } from 'react';
import "./Donation.css";

const Donation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    amount: '',
    frequency: '',
    comments: '',
    signature: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation Data:', formData);
    // 👉 Here you can send formData to your backend API
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2> Donation Request Form</h2>
      <p className='text'>your little amount can save million's life</p>

      <div className="fieldGroup">
        <label>Enter Your Name</label>
        <div className="nameInputs">
          <input
            type="text"
            name="firstName"
            placeholder="First"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="fieldGroup">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="### #### ####"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="fieldGroup">
        <label>Donation Amount</label>
        <input
          type="number"
          name="amount"
          placeholder="INR"
          value={formData.amount}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
      </div>

      <div className="fieldGroup">
        <label>Frequency of Donation</label>
        <div className="radioGroup">
          {['One-time', 'Monthly', 'Quarterly', 'Annually'].map(option => (
            <label key={option} className="radioLabel">
              <input
                type="radio"
                name="frequency"
                value={option.toLowerCase()}
                checked={formData.frequency === option.toLowerCase()}
                onChange={handleChange}
                required
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="fieldGroup">
        <label>Additional Comments</label>
        <textarea
          name="comments"
          placeholder="Your comments..."
          value={formData.comments}
          onChange={handleChange}
          rows="4"
        />
      </div>

      <div className="fieldGroup">
        <label>ADD SCREENSHOT</label>
        <input
          type='file'
          name="signature"
          placeholder="add screenshot"
          value={formData.signature}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default Donation;
