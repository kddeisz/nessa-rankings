import React from "react";

import "../styles/schools.css";

import Trans from "./Trans";

const School = ({ ranking, school }) => (
  <tr>
    <td>
      {ranking}.
    </td>
    <td>
      {school.name}
    </td>
    <td>
      {school.rating}
    </td>
  </tr>
);

const Schools = ({ schools }) => (
  <table className="schools">
    <thead>
      <tr>
        <th colSpan={2}>
          <Trans>School Name</Trans>
        </th>
        <th>
          <Trans>Rating</Trans>
        </th>
      </tr>
    </thead>
    <tbody>
      {schools.map((school, index) => (
        <School key={school.id} ranking={index + 1} school={school} />
      ))}
    </tbody>
  </table>
);

export default Schools;
