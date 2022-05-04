import React from 'react';

import { Comment } from '../../types/Comments';

import './CommentsInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="commentInfo" key={comment.id}>
    <h3 className="commentInfo__title">
      {comment.name}
    </h3>
    <p className="commentInfo__email">
      {comment.email}
    </p>
    <p className="commentInfo__body">
      {comment.body}
    </p>
  </li>
);
