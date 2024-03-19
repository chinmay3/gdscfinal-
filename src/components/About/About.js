import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="About" id="About">
          <div className="letter-image">
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
          </div>
          <div className="gradient-cards">
            {/* Existing content */}
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-description">
                  We cordially invite your students to participate in the
                  In-Person – Global Hackathon, a 24-hour event called
                  CodeClash, which will be held on the 19th of April at Bharati
                  Vidhyapeeth’s College of Engineering. We are expecting active
                  participation of near and about 80+ teams to develop and
                  compete for innovative solutions across diverse themes like
                  Healthcare, Fintech & E-commerce, Smart Education,
                  Sustainability & Development, Open Innovation.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-description">
                  The hackathon thrummed with the energy of passionate
                  participants, each eager to bring their boldest ideas to life.
                  In this electrifying atmosphere, participants were fueled not
                  only by their ambition to create but also by the array of
                  facilities and support at their fingertips.
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
                <p className="card-title">1) Free Food</p>
                <p className="card-description">
                  All Hackathon participants enjoy free meals and snacks
                  throughout the event. Keep your energy high and your
                  creativity flowing. Stay fueled and focused - your dream
                  project awaits!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">2) Goodies for Runner up</p>
                <p className="card-description">
                  Just for being part of Hackathon, everyone gets free goodies.
                  It’s our way of saying thanks for being with us.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">
                  3) Certificates For All Participants and Winners{" "}
                </p>
                <p className="card-description">
                  Not only do you get cool stuff, but every participant also
                  gets a certificate. Plus, the winning team gets a special
                  certificate for their awesome achievement!
                </p>
              </div>
            </div>
            <div className="card">
              <div className="container-card bg-green-box">
                <p className="card-title">4) Fun and surprise gifts</p>
                <p className="card-description">
                  Participants can anticipate exciting surprises and gifts
                  throughout the event, adding an element of fun and
                  anticipation to their hacking experience.
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
