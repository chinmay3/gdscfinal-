import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-waves">
        <div className="custom-wave" id="wave1" />
        <div className="custom-wave" id="wave2" />
        <div className="custom-wave" id="wave3" />
        <div className="custom-wave" id="wave4" />
      </div>
      <ul className="custom-social">
        <li className="custom-social__item">
          <a className="custom-social__link" href="#">
            <ion-icon name="logo-facebook" />
          </a>
        </li>
        <li className="custom-social__item">
          <a className="custom-social__link" href="#">
            <ion-icon name="logo-twitter" />
          </a>
        </li>
        <li className="custom-social__item">
          <a className="custom-social__link" href="#">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li className="custom-social__item">
          <a className="custom-social__link" href="#">
            <ion-icon name="logo-instagram" />
          </a>
        </li>
      </ul>
      <ul className="custom-menu">
        <li className="custom-menu__item">
          <a className="custom-menu__link" href="#">
            Home
          </a>
        </li>
        <li className="custom-menu__item">
          <a className="custom-menu__link" href="#">
            About
          </a>
        </li>
        <li className="custom-menu__item">
          <a className="custom-menu__link" href="#">
            Services
          </a>
        </li>
        <li className="custom-menu__item">
          <a className="custom-menu__link" href="#">
            Team
          </a>
        </li>
        <li className="custom-menu__item">
          <a className="custom-menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
