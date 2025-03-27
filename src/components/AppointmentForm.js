import React, { useState } from "react";
import "./AppointmentForm.css"; // Import styling

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    symptoms: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Consultation Data:", formData);
    // You can send data to backend here
  };

  return (
    <div className="consultation-container">
      <h2>Book a Consultation</h2>

      {submitted ? (
        <p className="success-message">
          Your consultation request has been submitted!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="consultation-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="symptoms"
            placeholder="Describe your symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ConsultationForm;
