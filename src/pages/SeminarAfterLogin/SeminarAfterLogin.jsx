import React from "react";
import Navbar2 from "../../commponent/NavbarAfterLogin/Navbar2";
import CreateEvent from "../../commponent/CreateEvent/CreateEvent";
import EventSeminar from "../../commponent/EventSeminar/EventSeminar";
import Footer from "../../commponent/Footer/Footer";

export default function Seminar() {
  return (
    <>
      <Navbar2 />
      <EventSeminar />
      <Footer />
    </>
  );
}
