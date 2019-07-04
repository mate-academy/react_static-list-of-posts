import React from "react";
import "../comments/Comment.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment" key={`comment-id-${comment.id}`}>
      (<span className="highlitedText">{comment.name}</span>, {comment.email})
      <br />"{comment.body}"
    </div>
  );
};

export default Comment;
