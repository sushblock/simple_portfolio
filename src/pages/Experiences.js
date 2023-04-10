import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import PreparationIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import BusinessIcon from "@material-ui/icons/Business";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import { exp_timeline } from "../data/data";

function Experiences() {
  const getIconTag = (icon) => {
    switch (icon) {
      case "SchoolIcon":
        return <SchoolIcon />;
      case "PreparationIcon":
        return <PreparationIcon />;
      case "WorkIcon":
        return <WorkIcon />;
      case "BusinessIcon":
        return <BusinessIcon />;
      case "LocalLibraryRoundedIcon":
        return <LocalLibraryRoundedIcon />;
      default:
        return <SchoolIcon />;
    }
  };

  return (
    <div className="experience">
      <h1>Experiences</h1>
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
