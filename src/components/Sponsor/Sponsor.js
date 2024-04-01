import "./Sponsor.css";
import React, { Component } from "react";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../images", false, /\.(png|jpe?g|svg)$/)
);

class Sponsor extends Component {
  render() {
    return (
      <div id="Sponsors">
        <div className="ui centered grid" id="blurWrap">
          <div className="row">
            <a href="" target="_blank">
              <img src={images["Ayouth_veda.png"]} style={{ width: "200px" }} />
            </a>
            <a href="" target="_blank">
              <img src={images["detafex.png"]} style={{ width: "275px" }} />
            </a>
            <a href="" target="_blank">
              <img src={images["gmat.jpeg"]} style={{ width: "175px" }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sponsor;
