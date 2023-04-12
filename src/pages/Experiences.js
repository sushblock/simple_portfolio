import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import {IoSchoolOutline} from "react-icons/io5";
import {VscLibrary} from "react-icons/vsc";
import {MdWork} from "react-icons/md";
import {FcBusiness} from "react-icons/fc";


import { exp_timeline } from "../data/data";

function Experiences() {
  const getIconTag = (icon) => {
    switch (icon) {
      case "SchoolIcon":
        return <IoSchoolOutline />;
      case "PreparationIcon":
        return <VscLibrary />;
      case "WorkIcon":
        return <MdWork />;
      case "BusinessIcon":
        return <FcBusiness />;
      case "LocalLibraryRoundedIcon":
        return <VscLibrary />;
      default:
        return <IoSchoolOutline />;
    }
  };

  return (
    <div className="projects">
      <h1 className="projectTitle">Experiences</h1>
      <VerticalTimeline lineColor="#21325e">
        {exp_timeline.map((item, number) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date={item.when}
              iconStyle={{ background: `${item.background}`, color: "#fff" }}
              icon={getIconTag(item.icon)}
              key={number}
            >
              <h3 className="vertical-timeline-element-title">{item.where}</h3>
              <p className="vertical-timeline-element-subtitle">{item.what}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;
