import React, { useMemo } from "react";

import "../styles/search.css";
import useField from "../utils/useField";

import { t } from "./Trans";

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
      <label htmlFor="search">
        <input
          className="search"
          aria-label={t("Search")}
          type="search"
          value={value}
          onChange={onChange}
          placeholder={t("Search")}
        />
      </label>
      {value.length > 0 && (
        <ul>
          {filtered.map(school => (
            <li key={school.id}>
              {school.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;
