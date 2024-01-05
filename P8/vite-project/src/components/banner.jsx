import React from "react";

function Banner({ image, title }) {
  return (
    <div className="banner">
      <div className="banner__ombre"></div>
      <img className="banner__img" src={image} alt={title} loading="eager" />
      <h1 className="banner__title">{title}</h1>
    </div>
  );
}

export default Banner;
