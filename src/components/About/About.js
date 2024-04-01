import React, { Component } from "react";
import "./About.css";
import prizePoolImage from "../../images/prize_pool.png";

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
                  "CodeClash is an exhilarating 24-hour hackathon experience
                  that merges innovation with determination! Mark your calendars
                  for April 19th-20th and prepare yourself, tech enthusiasts,
                  for a coding extravaganza designed to ignite your passion and
                  test your skills like never before. Dive into a marathon of
                  coding, collaboration, and creativity at this ultimate
                  hackathon event. Join us at Bharati vidyapeeth college of
                  engineering for an adrenaline fueled adventure where ideas
                  transform into reality and dreams into achievements. Unleash
                  your coding genius, compete with the best, and let every
                  keystroke bring you closer to victory. This is more than just
                  a hackathon; it's a journey of discovery, collaboration, and
                  celebration of the coding spirit. Join us and be part of
                  something extraordinary!"
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-description">
                  Participants at Code Clash will have the chance to demonstrate
                  their abilities, gain insights from industry leaders, and
                  build enduring relationships within the dynamic tech
                  community.
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
                  1. Distinguished mentors will offer guidance to participants,
                  helping them acquire valuable problem-solving skills.
                </p>
                <p className="card-description">
                  2. The event promises engaging activities, delightful cuisine,
                  and intellectual stimulation throughout. Additionally,
                  participants can enjoy extra perks during the event.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">1) Prize Pool and Goodies</p>
                <div className="prize-pool-container">
                  <img
                    src={prizePoolImage}
                    alt="Prize Pool"
                    className="prize-pool-image"
                  />
                  <p className="card-description-prize">
                    <br />
                    EXCITING GOODIES AND SWAGS
                  </p>
                </div>
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
                  Throughout the event, participants can look forward to
                  exciting surprises and gifts, enhancing the fun and
                  anticipation of their hacking experience.
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
                  provide complimentary food and refreshments throughout the
                  hackathon. Stay fueled, stay focused, and let your creativity
                  soar as you embark on an unforgettable coding adventure with
                  us!
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
