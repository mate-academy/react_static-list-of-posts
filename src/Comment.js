import React from "react";

const Comment = props => {
  return (
    <li>
      ({props.comment.name}, {props.comment.email})
      <br />
      {props.comment.body}
    </li>
  );
};

export default Comment;
