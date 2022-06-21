import React from "react";
import { Link } from "react-router-dom";
import "./MainCard.css";

const MainCard = React.forwardRef(({ imgPath, name, gender, profession, id }, ref) => {
  const linkStyle = {
    textDecoration: "inherit",
    color: "inherit",
  };
  return (
    <Link style={linkStyle} to={`/oompa-loompa/${id}`}>
      <article className="main-card">
        <img src={imgPath} alt={name} ref={ref} />
        <div className="main-card-body">
          <h4>{name}</h4>
          <p>{gender}</p>
          <p>{profession}</p>
        </div>
      </article>
    </Link>
  );
});

export default MainCard;
