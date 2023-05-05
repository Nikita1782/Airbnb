import React from "react";

const PlaceImg = ({ place, index = 0, className = null }) => {
  console.log("Image : ", place);
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return <img src={place.photos[index]} alt="" className={className} />;
};

export default PlaceImg;
