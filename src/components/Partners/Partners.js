import "./Partners.css";
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

class Partners extends Component {
  render() {
    return (
      <div id="Sponsors">
        <div className="ui centered grid" id="blurWrap">
          <div className="row">
            {/* <a href="https://devfolio.co/" target="_blank"> */}
            <img
              src={images["dev.png"]}
              style={{ width: "250px", margin: "30px" }}
            />
            {/* </a> */}
            {/* <a href="https://polygon.technology/" target="_blank"> */}
            <img
              src={images["polygon.png"]}
              style={{ width: "250px", margin: "30px" }}
            />
            {/* </a> */}
            {/* <a href="" target="_blank"> */}
            <img
              src={images["eth.png"]}
              style={{ width: "250px", margin: "30px" }}
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    );
  }
}
