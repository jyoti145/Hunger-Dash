import React from "react";

const Footer = () => (
  <footer className="bg-white border-t mt-10">
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
      <span className="text-gray-600">&copy; {new Date().getFullYear()} Hunger Dash</span>
      <span className="text-gray-600">Made with <span className="text-orange-500">♥</span> for foodies</span>
    </div>
  </footer>
);

export default Footer;