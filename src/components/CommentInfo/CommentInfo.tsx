import React from "react";
import { Comment } from "../../Types/Comment";

interface CommentInfoProps {
  comment: Comment;
}

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">{comment.name}</strong>

        {" by "}

        <a className="CommentInfo__email" href={`mailto:${comment.email}`}>
          {comment.email}
        </a>
      </div>

      <div className="CommentInfo__body">{comment.body}</div>
    </div>
  );
};
