import React from "react";

const Comment = props => {
  return (
    <li>
      (<span className="highlitedText">Name: </span>
      {props.comment.name}, <span className="highlitedText">Email: </span>
      {props.comment.email})
      <br />
      <span className="highlitedText">Comment: </span>
      {props.comment.body}
    </li>
  );
};

export default Comment;
