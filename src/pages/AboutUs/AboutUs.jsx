import React from "react";
import Navbar from "../../commponent/Navbar/Navbar";
import AboutUs from "../../commponent/AboutUs/AboutUs";
import Pencapaian from "../../commponent/Pencapaian/Pencapaian";
import About from "../../commponent/About/About";
import Team from "../../commponent/Team/Team";
import OurServices from "../../commponent/OurSevices/OurServices";
import "./about.css";

export default function HalamanAbout() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Pencapaian />
      <About />
      <OurServices />
      <Team />
    </>
  );
}
