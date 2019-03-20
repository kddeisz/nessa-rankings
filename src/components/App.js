import React from "react";

import useFetch from "../utils/useFetch";

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
      <h1>NESSA Rankings</h1>
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
