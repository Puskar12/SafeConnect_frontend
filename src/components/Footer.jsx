import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-4 text-center fixed bottom-0 left-0 w-full z-50">
     <p>© {new Date().getFullYear()} Fraud   Innovations. All rights reserved.</p>
    </footer>

  );
};

export default Footer;
