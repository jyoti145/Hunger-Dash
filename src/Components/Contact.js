import React from "react";

const Contact = () => (
  <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-10">
    <h1 className="text-3xl font-bold text-orange-500 mb-6">Contact Us</h1>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <textarea
        placeholder="Your Message"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        rows={4}
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;