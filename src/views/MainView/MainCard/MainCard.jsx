import React from "react";
import "./MainCard.css";

const MainCard = ({ imgPath, name, gender, profession }) => {
  return (
    <article className="main-card">
      <img src={imgPath} alt={name} />
      <div className="main-card-body">
        <h4>{name}</h4>
        <p>{gender}</p>
        <p>{profession}</p>
      </div>
    </article>
  );
};

export default MainCard;
