import React, { useMemo } from "react";

import "../styles/search.css";
import useField from "../utils/useField";

import { t } from "./Trans";

const Icon = ({ className, path }) => (
  <svg width="22px" height="22px" viewBox="0 0 1024 1024" className={className}>
    <path d={path} />
  </svg>
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
        <Icon
          className="search--icon"
          path="M689 596c30-47 48-103 48-163 0-168-136-305-304-305-168 0-304 136-304 305s136 305 304 305c61 0 118-18 165-49l14-10 217 217 67-69-217-217 10-14zM603 262c45 45 70 106 70 170s-25 125-70 170c-45 45-106 70-170 70s-125-25-170-70c-45-45-70-106-70-170s25-125 70-170c45-45 106-70 170-70s125 25 170 70z"
        />
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
          <ul>
            {filtered.map(school => (
              <li key={school.id}>
                {school.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Search;
