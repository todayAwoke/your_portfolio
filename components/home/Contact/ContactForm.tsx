'use client'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_ms3zr8v', 'template_orivcky', form.current, {
          publicKey: 'k0FfFK_lalSy7U739',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.error('Form reference is null');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-indigo-950 p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-white text-2xl mb-4 text-center">Contact Me</h2>
        
        <label className="block text-gray-300 mb-2" htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="w-full p-2 mb-4 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Your Name"
        />
        
        <label className="block text-gray-300 mb-2" htmlFor="user_email">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="w-full p-2 mb-4 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Your Email"
        />
        
        <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
        <textarea
          name="message"
          required
          className="w-full p-2 mb-4 border border-gray-600 rounded focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Your Message"
          rows={4}
        />
        
        <input
          type="submit"
          value="Send"
          className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};