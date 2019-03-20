import React from "react";

import useFetch from "../utils/useFetch";

import Search from "./Search";
import Trans from "./Trans";

const School = ({ school }) => (
  <>
    {school.name}
    {" "}
    {school.rating}
  </>
);

const App = () => {
  const { error, fetching, json } = useFetch("/");
  const { schools = [] } = json;

  return (
    <>
      <h1>
        <Trans>NESSA Rankings</Trans>
      </h1>
      <Search schools={schools} />
      {schools.map((school, index) => (
        <div key={school.id}>
          {index + 1}.
          {" "}
          <School school={school} />
        </div>
      ))}
    </>
  );
};

export default App;
