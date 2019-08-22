import React from "react";
 import SeasonDisplayCSS from './SeasonDisplayCSS.css';

const seasonConfig = {
  summer: {
    text: "beach",
    iconNmae: "sun"
  },
  winter: {
    text: "chil climate",
    iconNmae: "snowflake"
  }
};

const getSeason = (lat, month) => {

  if (month > 2 && month < 9) {
      console.log(lat);
    return lat > 0 ? "summer" : "winter";

  } else {
      console.log(lat);
    return lat > 0 ? "summer" : "winter";
  }
};
const SeasonDisplay = props => {
  console.log(props.latitude);
    
  const season = getSeason(props.latitude, new Date().getMonth());

    const icons = season === 'winter' ?'snowflake':'sun';
   const {text, iconNmae}=  seasonConfig[season];
  
    return (
        <div className={`season-display ${season}`}>
        {/* <div> Season Display {season} </div>? */}
        <i className={`${iconNmae} massive icon-left  icon`} />
        <i className={`${iconNmae} massive icon-right  icon`} />
        <h4>{text}</h4>
      </div>
    );
    
};

export default SeasonDisplay;
