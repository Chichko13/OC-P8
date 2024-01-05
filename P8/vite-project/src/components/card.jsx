import React from "react";
import Data from "../data/data.json";
import { NavLink } from "react-router-dom";

function Card({ data }) {
  const slug = data.title.toLowerCase().split(" ").join("_");
  return (
    <NavLink to={`/house/${slug}`} className="card" key={data.id}>
      <img
        className="card__img"
        src={data.cover}
        alt={data.title}
        loading="eager"
      />
      <h3 className="card__title">{data.title}</h3>
    </NavLink>
  );
}

export default Card;
