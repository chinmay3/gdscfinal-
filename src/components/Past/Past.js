import React, { Component } from "react";
import "./Past.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdEmojiFoodBeverage, MdFreeBreakfast } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";
import { HiMiniTrophy } from "react-icons/hi2";

import { BsPersonWorkspace } from "react-icons/bs";

import { GiArchiveRegister, GiCandleLight, GiLaptop } from "react-icons/gi";

class Past extends Component {
  render() {
    return (
      <>
        <div className="Past" id="Past">
          <div className="ui centered grid">
            <div className="Row">
              <div className="Timeline">
                <VerticalTimeline lineColor={"#7D4CDA"} lineWidth={"50px"}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{ borderRight: "7px solid white" }}
                    iconStyle={{ background: "#2E0085", color: "beige" }}
                    icon={<GiArchiveRegister />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Registration Starts
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      8 AM ~ 10 AM
                    </h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<GiCandleLight />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Opening Ceremony
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      10 AM ~ 11 AM
                    </h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<GiLaptop />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Round 1 Starts
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      11 AM Onwards
                    </h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdEmojiFoodBeverage />}
                  >
                    <h3 className="vertical-timeline-element-title">Snacks</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      5:30 PM
                    </h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<BsPersonWorkspace />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Round 2 Starts
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      7:30 PM Onwards
                    </h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<IoFastFood />}
                  >
                    <h3 className="vertical-timeline-element-title">Dinner</h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      9:30 PM
                    </h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<MdFreeBreakfast />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Breakfast
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">8 AM</h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<FaComputer />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Round 3 Starts
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">9 AM</h4>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#3F4047", color: "white" }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)"
                    }}
                    iconStyle={{ background: "#2E0085", color: "#fff" }}
                    icon={<HiMiniTrophy />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Closing Ceremony
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      12 PM
                    </h4>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Past;
