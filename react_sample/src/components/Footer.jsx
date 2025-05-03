import React from "react";
import Container from "./Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mx-5 bg-black text-white py-2 text-center mt-auto">
      <Container>Developed by SoeMyatMon @ {currentYear}</Container>
    </footer>
  );
};
export default Footer;
