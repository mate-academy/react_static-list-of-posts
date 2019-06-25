import React from "react";

function Comment(props) {
  return (
    <div className="comment" key={props.body}>
      <h5>{props.name}</h5>
      <p>{props.body}</p>
      <a href={"mailto: " + props.email}>{props.email}</a>
    </div>
  );
}

export default Comment;
