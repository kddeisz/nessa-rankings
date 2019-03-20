import React from "react";

import "../styles/app.css";
import useFetch from "../utils/useFetch";

import Schools from "./Schools";
import Search from "./Search";
import Trans from "./Trans";

const App = () => {
  const { json } = useFetch("/");
  const { schools = [] } = json;

  return (
    <>
      <nav>
        <Trans>NESSA Rankings</Trans>
      </nav>
      <main>
        <h1>
          <Trans>Welcome</Trans>
        </h1>
        <p>
          <Trans>
            Easy to use and always up-to-date, this is your definitive source
            for New England Scholastic Sailing Association rankings.
          </Trans>
        </p>
        <Search schools={schools} />
        <Schools schools={schools} />
      </main>
    </>
  );
};

export default App;
