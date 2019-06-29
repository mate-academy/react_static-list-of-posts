import React from "react";
import '../App.css';

function Comment(props) {
  return (
    <div className="comment">
      <span className="comment-email">{props.comment.email} </span>
      <span className="comment-body">{props.comment.body}</span>
    </div>
  )
}

export default Comment;