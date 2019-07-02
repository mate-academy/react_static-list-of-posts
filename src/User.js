import React from "react";

const User = props => {
  return (
    <td>
      <span className="highlitedText">Name:</span> {props.user.name}, <br />
      <span className="highlitedText">userName:</span> {props.user.username},{" "}
      <br />
      <span className="highlitedText">Address:</span>
      {
        <ul>
          <li>Street: {props.user.address.street}</li>
          <li>Suite: {props.user.address.suite}</li>
          <li>City: {props.user.address.city}</li>
          <li>Zipcode: {props.user.address.zipcode}</li>
          <li>
            Geo: {props.user.address.geo.lat}, {props.user.address.geo.lng}
          </li>
        </ul>
      }
    </td>
  );
};

export default User;
