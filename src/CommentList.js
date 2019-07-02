import React from "react";
import Comment from "./Comment";

const CommentList = props => {
  return (
    <td>
      <ul>
        {props.comments.map(comment => (
          <Comment comment={comment} />
        ))}
      </ul>
    </td>
  );
};

export default CommentList;
