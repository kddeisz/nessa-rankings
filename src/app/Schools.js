import React from "react";

import "../styles/schools.css";
import useAriaClick from "../utils/useAriaClick";

import { useRouter } from "./Router";
import Trans from "./Trans";

const School = ({ ranking, school }) => {
  const { onPathChange } = useRouter();
  const ariaClick = useAriaClick(
    () => onPathChange(`/schools/${school.id}`),
    [onPathChange, school]
  );

  return (
    <tr {...ariaClick}>
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
};

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
