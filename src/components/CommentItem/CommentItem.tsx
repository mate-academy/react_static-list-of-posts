import React from 'react';

import { Comment } from '../../types/Comment';

import './CommentItem.scss';

type Props = {
  comment: Comment;
};

export const ComentItem: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentItem">
      <img
        className="CommentItem__profile-picture"
        src="images/persona.png"
        alt="Profile"
      />
      <h3 className="CommentItem__name">{comment.name}</h3>
      <p className="CommentItem__body">{comment.body}</p>
      <p className="CommentItem__email">{comment.email}</p>
    </div>
  );
};
