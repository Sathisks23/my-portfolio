'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Simulate sending the form (replace with actual API call)
    setTimeout(() => {
      setSuccessMessage('Thank you for reaching out! I will get back to you soon.');
      setErrorMessage('');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>

      {errorMessage && (
        <div className="bg-red-500 text-white p-3 mb-4 rounded-md text-center">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="bg-green-500 text-white p-3 mb-4 rounded-md text-center">
          {successMessage}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md mt-2"
            rows="5"
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Feel free to reach out to me via the form above or using the details below.
        </p>
        <ul className="space-y-2 mt-4">
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
              your-email@example.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890
          </li>
          <li>
            <strong>Social Media:</strong>{' '}
            <a
              href="https://linkedin.com/in/your-profile"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{' '}
            |{' '}
            <a
              href="https://twitter.com/your-profile"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
