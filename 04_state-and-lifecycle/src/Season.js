import React from "react";
import "./Season.css";

//determine the current season
const getSeason = (lat, month) => {
  //summer months in northern hemisphere (april-september)
  //summer months in southern hemisphere (october-march)
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  summer: {
    text: "It is hot and sunny!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default Season;
