import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-5 bg-black text-white py-2 text-center mt-auto">
      Developed by SoeMyatMon @ {currentYear}
    </footer>
  );
};

export default Footer;
