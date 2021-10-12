import React from "react";
import { Comment } from "../Types";

export const CommentInfo: React.FC<{comment:Comment}> = ({comment}) => (
  <div className="comments__comment">
    <h5 className="comment__name">{comment.name}</h5>
    <p className="comment__body">{comment.body}</p>
    <div className="comment__mail">{comment.email}</div>
  </div>
)