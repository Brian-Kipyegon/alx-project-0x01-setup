import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} ALX Project 0x01. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
