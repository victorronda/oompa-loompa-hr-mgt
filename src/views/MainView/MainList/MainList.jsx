import React from "react";
import MainCard from "../MainCard/MainCard";
import "./MainList.css";

const MainList = ({ items = [] }) => {
  return (
    <section className="main-list-container">
      {items.map((item) => {
        const name = `${item.first_name} ${item.last_name}`;
        const gender = item.gender === "F" ? "Female" : "Male";
        return (
          <MainCard
            key={item.id}
            imgPath={item.image}
            name={name}
            gender={gender}
            profession={item.profession}
          />
        );
      })}
    </section>
  );
};

export default MainList;
