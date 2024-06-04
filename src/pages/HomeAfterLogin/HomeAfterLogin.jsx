import React from "react";
import Navbar2 from "../../commponent/NavbarAfterLogin/Navbar2";
import Background from "../../commponent/Background/Background";
import Upcomming from "../../commponent/Upcomming/Upcomming";
import Topselling from "../../commponent/Topselling/Topselling";
import Contentseminar from "../../commponent/Contentseminar/Contentseminar";
import Contentconcert from "../../commponent/Contentconcert/Contentconcert";
import Pencarian from "../../commponent/Pencarian/Pencarian";

import "./afterlogin.css";

export default function Home() {
  return (
    <>
      <Navbar2 />
      <Background />
      <Pencarian />
      <Upcomming />
      <Topselling />
      <Contentseminar />
      <Contentconcert />
    </>
  );
}
