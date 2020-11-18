import React from "react";
import { SearchBarStyled } from "../styles";

const SearchBar = ({ setQuery }) => {
  return (
    <SearchBarStyled
      placeholder="Search movies..."
      onChange={(event) => setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
