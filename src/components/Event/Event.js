import React, { Component } from "react";
import pdfIcon from "../../images/pdf.svg";

// import ProblemStatementsPDF from "../../../public/ProblemStatements.pdf"; // Importing the PDF file

import "./Event.css";
import { Card } from "semantic-ui-react";
import theme1 from "../../images/theme1.png";
import theme2 from "../../images/theme2.png";
import theme3 from "../../images/theme3.png";
import theme4 from "../../images/theme4.png";
import theme5 from "../../images/theme5.png";
import theme6 from "../../images/theme6.png";
import theme7 from "../../images/theme7.png";
import theme8 from "../../images/theme8.png";

class Event extends Component {
  handleClick(link) {
    window.location.href = link;
  }

  render() {
    // Array of card data
    const cardsData = [
      {
        title: "MedTech / BioTech / HealthTech",
        text: "",
        link: "#",
        discount: "10%",
        imageUrl: theme1,
        pdfLink: "/Med.pdf"
      },
      {
        title: "Agriculture, FoodTech & Rural Development  ",
        text: "",
        link: "#",
        discount: "20%",
        imageUrl: theme2,
        pdfLink: "/Agri.pdf"
      },
      {
        title: "Disaster Management   ",
        text: "",
        link: "#",
        discount: "30%",
        imageUrl: theme3,
        pdfLink: "/Disaster.pdf"
      },
      {
        title: "Fintech ",
        text: "",
        link: "#",
        discount: "40%",
        imageUrl: theme4,
        pdfLink: "/Fintech.pdf"
      },

      {
        title: "Blockchain & Cybersecurity",
        text: "",
        link: "#",
        discount: "60%",
        imageUrl: theme6,
        pdfLink: "/Blockchain.pdf"
      },
      {
        title: "Clean & Green Technology",
        text: "",
        link: "#",
        discount: "70%",
        imageUrl: theme7,
        pdfLink: "/Clean.pdf"
      },
      {
        title: "Tourism ",
        text: "",
        link: "#",
        discount: "80%",
        imageUrl: theme8,
        pdfLink: "/Tourism.pdf"
      },
      {
        title: "Miscellaneous",
        text: "",
        link: "#",
        discount: "50%",
        imageUrl: theme5,
        pdfLink: "/Misc.pdf"
      }
    ];

    return (
      <div className="Event" id="Events">
        <div className="ui centered grid">
          <div className="row" id="cardRow">
            {cardsData.map((card, index) => (
              <div className="card-hover" key={index}>
                <div className="card-hover__content">
                  <h3 className="card-hover__title">{card.title}</h3>
                  <p className="card-hover__text">{card.text}</p>
                  <a
                    href={card.pdfLink}
                    className="card-hover__link"
                    download={`${card.title} Problem Statements.pdf`}
                  >
                    <span>DOWNLOAD DETAILED PROBLEM STATEMENT </span>
                    <img src={pdfIcon} alt="PDF Icon" />{" "}
                    {/* Using pdf.svg icon */}
                  </a>
                </div>
                <div className="card-hover__extra">
                  <h4>Learn now and get {card.discount} discount!</h4>
                </div>
                <div className="themepic1">
                  <img src={card.imageUrl} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
