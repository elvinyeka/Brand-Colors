import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import MainContext from "../MainContext";

const Search = () => {
  const { search, setSearch } = useContext(MainContext);
  return (
    <div className="search">
      <form className="icon">
        <AiOutlineSearch />
      </form>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Brands"
      />
    </div>
  );
};

export default Search;
