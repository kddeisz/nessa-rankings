import React, { useMemo } from "react";

import "../styles/search.css";
import useField from "../utils/useField";

import { SearchInputIcon, SearchResultIcon } from "./Icon";
import { Link } from "./Router";
import { t } from "./Trans";

const SearchResult = ({ school }) => (
  <Link to={`/schools/${school.id}`}>
    <SearchResultIcon />
    {school.name}
  </Link>
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
      {value.length > 0 && (
        <div className="search--results">
          {filtered.map(school => (
            <SearchResult key={school.id} school={school} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
