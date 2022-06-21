import React from "react";
import parse from "html-react-parser";
import "./DetailCard.css";

const DetailCard = ({ oompaLoompa }) => {
  const getDescription = (description) => {
    const htmlTagsRegExp = /<(“[^”]*”|'[^’]*’|[^'”>])*>/gi;
    if (description.search(htmlTagsRegExp) !== -1) {
      return parse(description);
    } else {
      return description;
    }
  };

  const { image: imageUrl, first_name, last_name } = oompaLoompa;
  const name = oompaLoompa && oompaLoompa.first_name && oompaLoompa.last_name ? `${first_name} ${last_name}` : 'Loading Name'
  const gender = oompaLoompa && oompaLoompa.gender ? oompaLoompa.gender === "F" ? "Female" : "Male" : 'Loading Gender...';
  const profession = oompaLoompa && oompaLoompa.profession ? oompaLoompa.profession : 'Loading Profession...';
  const description = oompaLoompa && oompaLoompa.description ? getDescription(String(oompaLoompa.description)) : 'Loading Description...';

  return (
    <article className="detail-card">
      <div className="detail-card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="detail-card-specs">
        <h1>
          { name }
        </h1>
        <p>{gender}</p>
        <p>{profession}</p>
        <div>{description}</div>
      </div>
    </article>
  );
};

export default DetailCard;
