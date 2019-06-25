import React from "react";

function User(props) {
  return (
    <div className="user" key={props.name}>
      <h4>{props.name}</h4>
      <p>{props.address["city"]}</p>
      <a href={"mailto: " + props.email}>{props.email}</a>
      <div>~~~~~~~~~~~~~Comments~~~~~~~~~~~~~~~~</div>
    </div>
  );
}

export default User;
