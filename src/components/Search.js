import React, { useMemo } from "react";

import useField from "../utils/useField";

import Trans from "./Trans";

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
        <Trans>Search: </Trans>
        <input type="text" value={value} onChange={onChange} />
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
