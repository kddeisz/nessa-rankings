import React, { useMemo } from "react";

import "../styles/search.css";
import useField from "../utils/useField";

import { t } from "./Trans";
import { SearchInputIcon, SearchResultIcon } from "./Icon";

const SearchResults = ({ schools }) => (
  <div className="search--results">
    <ul>
      {schools.map(school => (
        <li key={school.id}>
          <SearchResultIcon />
          {school.name}
        </li>
      ))}
    </ul>
  </div>
);

const Search = ({ schools }) => {
  const [value, onChange] = useField();
  const filtered = useMemo(
    () => {
      if (!value) {
        return [];
      }
      const needle = value.toLowerCase();
      return schools.filter(({ name }) => name.toLowerCase().includes(needle));
    },
    [value, schools]
  );

  return (
    <>
      <label htmlFor="search" className="search--label">
        <SearchInputIcon />
        <input
          className="search--input"
          aria-label={t("Search")}
          type="search"
          value={value}
          onChange={onChange}
          placeholder={t("Search")}
        />
      </label>
      {value.length > 0 && <SearchResults schools={filtered} />}
    </>
  );
};

export default Search;
