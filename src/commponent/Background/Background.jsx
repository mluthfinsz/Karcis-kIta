import React from "react";
import Image from "react-bootstrap/Image";
import gambarWeb from "../../assets/image/gambarweb.jpg";
import "./background.css";

function FluidExample() {
  return (
    <div className="custom-image-container">
      <Image src={gambarWeb} fluid className="custom-full-width-image" />
      <div className="custom-centered-text">
        Exclusive events, priceless moments
      </div>
    </div>
  );
}

export default FluidExample;
