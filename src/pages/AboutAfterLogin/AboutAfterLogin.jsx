import React from "react";
import Navbar2 from "../../commponent/NavbarAfterLogin/Navbar2";
import AboutUs from "../../commponent/AboutUs/AboutUs";
import Pencapaian from "../../commponent/Pencapaian/Pencapaian";
import About from "../../commponent/About/About";
import Team from "../../commponent/Team/Team";
import OurServices from "../../commponent/OurSevices/OurServices";
import "./AboutAfterLogin.css";
import Footer from "../../commponent/Footer/Footer";

export default function HalamanAbout() {
  return (
    <>
      <Navbar2 />
      <AboutUs />
      <Pencapaian />
      <About />
      <OurServices />
      <Team />
    </>
  );
}
