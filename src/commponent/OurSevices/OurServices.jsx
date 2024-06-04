import React from "react";
import "./OurServices.css"; // Impor gaya CSS
import systemImage from "../../assets/image/system.jpg";
import Store from "../../assets/image/Store.jpg"; // Impor gambar system.jpg
import security from "../../assets/image/security.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="heading">Our Services</div>
      <div className="container">
        <div className="customRectangle">
          {/* Menggunakan kelas customRectangle */}
          <img src={Store} alt="System" />
          <p className="whiteText">Online Store with Support Major Payment</p>
          <p className="yellowText">
            Accommodating online purchases through the website, We support all
            the major payment method in Indonesia, from bank transfer to
            electronic money.
          </p>
        </div>
        <div className="customRectangle2">
          {/* Menggunakan kelas customRectangle */}
          <img src={systemImage} alt="System" />
          <p className="whiteText">Admin System</p>
          <p className="text-1">
            Create and monitor your event’s ticket sales reports, in real time
            anywhere and anytime
          </p>
        </div>
        <div className="customRectangle3">
          {/* Menggunakan kelas customRectangle */}
          <img src={security} alt="System" />
          <p className="whiteText">Security</p>
          <p className="text-1">
            We build our system with security in mind, so you as event organizer
            can focus on your event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
