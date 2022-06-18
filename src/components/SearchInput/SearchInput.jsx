import React from "react";
import { SEARCH_ICON_URL } from "../../constants";
import Input from "../UI/Input/Input";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="search-input-container">
      <Input className="search-input" name="search" type="text" placeholder="Search" />
      <img
        className="search-icon"
        src={SEARCH_ICON_URL}
        alt="Magnifying Glass Search Icon"
      />
    </div>
  );
};

export default SearchInput;
