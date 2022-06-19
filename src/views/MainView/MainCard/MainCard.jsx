import React from "react";
import { Link } from "react-router-dom";
import "./MainCard.css";

const MainCard = ({ imgPath, name, gender, profession, id }) => {
  const linkStyle = {
    textDecoration: "inherit",
    color: "inherit",
  };
  return (
    <Link style={linkStyle} to={`/oompa-loompa/${id}`}>
      <article className="main-card">
        <img src={imgPath} alt={name} />
        <div className="main-card-body">
          <h4>{name}</h4>
          <p>{gender}</p>
          <p>{profession}</p>
        </div>
      </article>
    </Link>
  );
};

export default MainCard;
