import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-400">For inquiries and information, feel free to contact us:</p>
        <a href="mailto:info@example.com" className="block mt-2 text-blue-400 hover:text-blue-300">
          info@example.com
        </a>
        <p className="mt-4 text-gray-400">Follow us on social media:</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Twitter
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


