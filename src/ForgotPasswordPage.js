import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send OTP to the email address
      const response = await axios.post('/api/send-otp', { email });
      console.log(response.data); // Handle success or error messages
      // You might want to redirect the user to an OTP verification page or show a success message here
    } catch (error) {
      setError('Error sending OTP. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
        <button type="submit">Send OTP</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;