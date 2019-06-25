import React from "react";
import Comment from "../components/Comment";
import { comments } from "../data/comments";

function Comments(props) {
  const filtredComments = comments.filter(
    comment => comment.postId === props.id
  );
  const commentsList = filtredComments.map(comment => Comment(comment));

  return <div className="comment">{commentsList}</div>;
}

export default Comments;
