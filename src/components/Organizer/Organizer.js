import React, { Component } from "react";
import "./Organizer.css"; // Import custom CSS for the component
import riyaImage from "../../images/riya.png";
import tusharImage from "../../images/tushar.png";
import alkaImage from "../../images/alka.png";
import dhruvImage from "../../images/dhruv.png";
import ameyaImage from "../../images/ameya.png";
import avantikaImage from "../../images/Avantika.png";
import shwetaImage from "../../images/shweta.png";
import chinmayImage from "../../images/chinmay.png";
import rishiImage from "../../images/rishi.png";
import shreshthImage from "../../images/Shreshth Agarwal.png";
import priyanshiImage from "../../images/Priyanshi.png";

class Organizer extends Component {
  render() {
    return (
      <>
        <div className="Past" id="Organizer">
          <div className="ui centered grid">
            <div className="Row">
              <div className="Timeline">
                <UncontrolledExample />
              </div>
            </div>
            {/* <div className="Row">
              <div className="Timeline">
                <UncontrolledExample />
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

function UncontrolledExample() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="firstslide">
          <img src={alkaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={riyaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={avantikaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={dhruvImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={tusharImage} alt="" className="slide-image" />
        </div>

        <div className="slide">
          <img src={ameyaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={shwetaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={priyanshiImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={chinmayImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={shreshthImage} alt="" className="slide-image" />
        </div>

        <div className="slide">
          <img src={rishiImage} alt="" className="slide-image" />
        </div>
      </div>
    </div>
  );
}

export default Organizer;
