import React from "react";
import Navbar from "../../commponent/Navbar/Navbar";
import Background from "../../commponent/Background/Background";
import Upcomming from "../../commponent/Upcomming/Upcomming";
import Topselling from "../../commponent/Topselling/Topselling";
import Contentseminar from "../../commponent/Contentseminar/Contentseminar";
import Contentconcert from "../../commponent/Contentconcert/Contentconcert";
import Pencarian from "../../commponent/Pencarian/Pencarian";

import "./homeabout.css";
import Footer from "../../commponent/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Background />
      <Pencarian />
      <Upcomming />
      <Topselling />
      <Contentseminar />
      <Contentconcert />
    </>
  );
}
