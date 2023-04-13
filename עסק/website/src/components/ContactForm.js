import React, { useState } from 'react';

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !phoneNumber || !email) {
      alert('Please fill out all required fields.');
      return;
    }

    // Submit the form data to your server
    console.log('Form data:', { fullName, phoneNumber, email, notes });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label htmlFor="fullName" className="text-right">שם מלא *</label>
      </div>
      <div className="input-group">
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label htmlFor="phoneNumber" className="text-right">מספר טלפון *</label>
      </div>
      <div className="input-group">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email" className="text-right">אימייל *</label>
      </div>
      <div className="input-group">
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <label htmlFor="notes" className="text-right">הערות</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;