import React from 'react';
import { Comment } from './interface';

type CommentType = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentType> = ({ comments }) => {
  return (
    <ul className="commentList">
      {comments.map((comment) => (
        <li key={comment.id}>
          <h3 className="commentList__name">{comment.name}</h3>
          <p className="commentList__body">{comment.body}</p>
          <a href={comment.email} className="commentList__email">
            {comment.email}
          </a>
        </li>
      ))}
    </ul>
  );
};
