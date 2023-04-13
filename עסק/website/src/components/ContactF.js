import React, { useState } from 'react';

function ContactF() {
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

    console.log('Form data:', { fullName, phoneNumber, email, notes });
  };

  return (
    <form className="w-full max-w-md mx-auto space-y-6" onSubmit={handleSubmit} dir="rtl">
            {/* Full Name */}
            <div className="relative">
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-600 transition duration-300 ease-in-out transform border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
        <label
          htmlFor="fullName"
          className={`absolute left-0 -top-4 ml-4 mt-2 origin-0 text-gray-600 transition-all duration-200 ease-in-out transform ${
            fullName ? '-translate-y-6' : ''
          }`}
        >
          Full Name *
        </label>
      </div>

      {/* Phone Number */}
      <div className="relative">
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-600 transition duration-300 ease-in-out transform border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
        <label
          htmlFor="phoneNumber"
          className={`absolute left-0 -top-4 ml-4 mt-2 origin-0 text-gray-600 transition-all duration-200 ease-in-out transform ${
            phoneNumber ? '-translate-y-6' : ''
          }`}
        >
          Phone Number *
        </label>
      </div>

      {/* Email */}
      <div className="relative">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-600 transition duration-300 ease-in-out transform border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
        <label
          htmlFor="email"
          className={`absolute left-0 -top-4 ml-4 mt-2 origin-0 text-gray-600 transition-all duration-200 ease-in-out transform ${
            email ? '-translate-y-6' : ''
          }`}
        >
          Email *
        </label>
      </div>

      {/* Notes */}
      <div className="relative">
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-base text-black placeholder-gray-600 transition duration-300 ease-in-out transform border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        ></textarea>
        <label
          htmlFor="notes"
          className={`absolute left-0 -top-4 ml-4 mt-2 origin-0 text-gray-600 transition-all duration-200 ease-in-out transform ${
            notes ? '-translate-y-6' : ''
          }`}
        >
          Notes
        </label>
      </div>

            {/* Submit button */}
            <button
        type="submit"
        className="w-full px-8 py-2 text-lg text-white bg-blue-500 border-0 rounded focus:outline-none hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactF;
