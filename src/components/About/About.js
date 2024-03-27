import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="About" id="About">
          {/* <div className="letter-image">
            <div className="animated-mail">
              <div className="back-fold" />
              <div className="letter">
                <div className="letter-border" />
                <div className="letter-title" />
                <div className="letter-context" />
                <div className="letter-stamp">
                  <div className="letter-stamp-inner" />
                </div>
              </div>
              <div className="top-fold" />
              <div className="body" />
              <div className="left-fold" />
            </div>
            <div className="shadow" />
          </div> */}
          <div className="gradient-cards">
            {/* Existing content */}
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-description">
                  Code Clash is a thrilling 24-hour offline hackathon set to
                  ignite the innovative spirit of 350+ participants, drawn from
                  a pool of over 1500 enthusiastic registrants. Hosted with a
                  passion for coding, this event promises an unforgettable
                  experience filled with intense coding sessions, collaborative
                  problem-solving, and the thrill of competition. Fueling
                  creativity, the hackathon offers not only refreshments and
                  meals but also exclusive swags and charms for the runner-ups.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-description">
                  As participants immerse themselves in the challenges, they
                  will have the opportunity to showcase their skills, learn from
                  industry experts, and forge lasting connections in the vibrant
                  tech community.
                </p>
              </div>
            </div>

            {/* New content */}
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title1">
                  What participants can expect from this event:
                </p>
                <p className="card-description">
                  1. Distinguished mentors provide guidance to participants,
                  enabling them to learn valuable problem-solving skills.{" "}
                </p>
                <p className="card-description">
                  2. Engaging activities, delicious food, and intellectual
                  stimulation throughout the event. We are also providing
                  additional perks for the participants:
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">1) Prize Pool and Goodies</p>
                <p className="card-description">
                  Explore our enticing prize pool, where innovation meets
                  reward:
                  <ul>
                    <li>1st Prize: 15,000 INR</li>
                    <li>2nd Prize: 10,000 INR</li>
                    <li>3rd Prize: 5,000 INR</li>
                  </ul>
                  We extend recognition to not only the winners but also the
                  enthusiasm of our esteemed runner-ups by providing them
                  exciting goodies and charms.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">2) Participation Certificates</p>
                <p className="card-description">
                  In addition to receiving exciting swags, each participant will
                  be awarded a certificate of participation. Furthermore, the
                  winning team will be honored with a special certificate
                  recognizing their outstanding achievement!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">3) Mentorship and Guidance</p>
                <p className="card-description">
                  Seasoned mentors offer invaluable guidance to participants,
                  fostering an environment where every individual can enhance
                  their problem-solving skills and nurture their projects to
                  fruition. Mentorship is provided to each participant,
                  empowering them to learn effectively and elevate their project
                  development journey
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">4) Fun and surprise gifts:</p>
                <p className="card-description">
                  Participants can anticipate exciting surprises and gifts
                  throughout the event, adding an element of fun and
                  anticipation to their hacking experience.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">
                  5) Complimentary Refreshments Throughout the Hackathon!
                </p>
                <p className="card-description">
                  Indulge in a culinary journey of energy and motivation as we
                  provide free food and refreshments throughout the hackathon.
                  Stay fueled, stay focused, and let your creativity soar as you
                  embark on an unforgettable coding adventure with us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
