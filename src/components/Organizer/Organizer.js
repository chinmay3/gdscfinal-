import React, { Component } from "react";
import "./Organizer.css"; // Import custom CSS for the component
import riyaImage from "../../images/riya.png";
import tusharImage from "../../images/tushar.png";

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
        <div className="slide">
          <img src={riyaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={tusharImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={riyaImage} alt="" className="slide-image" />
        </div>

        <div className="slide">
          <img src={tusharImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={riyaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={tusharImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={riyaImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={tusharImage} alt="" className="slide-image" />
        </div>
        <div className="slide">
          <img src={riyaImage} alt="" className="slide-image" />
        </div>
      </div>
    </div>
  );
}

export default Organizer;
