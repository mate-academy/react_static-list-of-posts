import React from 'react';

import { Comment } from '../../types/type';

import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__name">{comment.name}</h3>
    <a href={`mailto:${comment.email}`} className="comment__email">
      {comment.email}
    </a>
    <p className="comment__text">{comment.body}</p>

  </div>
);
