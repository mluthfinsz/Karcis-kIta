import React from "react";
import "./pencapaian.css"; // Impor gaya CSS

const AboutUs = () => {
  return (
    <div className="container">
      <div className="rectangle">
        <p>
          <span class="small-text">Trusted by</span>
          <br />
          <span class="large-bold-text">1.000 ++</span>
          <br />
          <span class="medium-text">Event Creators</span>
        </p>
      </div>
      <div className="rectangle">
        <p>
          <span class="small-text">Serving</span>
          <br />
          <span class="large-bold-text">10.000 +</span>
          <br />
          <span class="medium-text">Ticket Sold</span>
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
