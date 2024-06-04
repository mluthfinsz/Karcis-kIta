import React from "react";
import Navbar from "../../commponent/Navbar/Navbar";
import Pencarian from "../../commponent/Pencarian/Pencarian";
import ConcertMusic from "../../commponent/ConcertMusic/ConcertMusic";

export default function Concert() {
  return (
    <>
      <Navbar />
      <Pencarian />
      <ConcertMusic />
    </>
  );
}
