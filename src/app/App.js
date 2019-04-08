import React, { useMemo } from "react";

import "../styles/app.css";
import useFetch from "../utils/useFetch";

import { NavIcon } from "./Icon";
import { History, Router } from "./Router";
import Schools from "./Schools";
import Search from "./Search";
import Trans from "./Trans";

const School = ({ schoolId, schools }) => {
  if (schools.length === 0) {
    return null;
  }

  const schoolIdx = useMemo(
    () => {
      const parsedId = parseInt(schoolId, 10);
      return schools.findIndex(({ id }) => id === parsedId);
    },
    [schoolId, schools]
  );

  const school = schools[schoolIdx];
  const ranking = schoolIdx + 1;

  return (
    <>
      <h1>{school.name}</h1>
      <strong>{ranking}</strong>
    </>
  );
};

const Home = ({ schools }) => (
  <>
    <header>
      <h1>
        <Trans>Welcome</Trans>
      </h1>
      <p>
        <Trans>
          Easy to use and always up-to-date, this is your definitive source
          for New England Scholastic Sailing Association rankings.
        </Trans>
      </p>
    </header>
    <Search schools={schools} />
    <Schools schools={schools} />
  </>
);

const App = () => {
  const { json } = useFetch("/");
  const { schools = [] } = json;

  return (
    <History>
      <nav>
        <NavIcon />
        <Trans>NESSA Rankings</Trans>
      </nav>
      <main>
        <Router>
          <Home path="/" schools={schools} />
          <School path="/schools/:schoolId" schools={schools} />
        </Router>
      </main>
    </History>
  );
};

export default App;
