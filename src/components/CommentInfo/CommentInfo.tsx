import React from 'react';

import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="comment">
    <div className="comment__user">
      <img className="comment__avatar" src="./images/avatar.png" alt="avatar" />
      <h4 className="comment__name">
        {comment.name}
      </h4>
      <a className="comment__email" href={`mailto: ${comment.email}`}>
        {comment.email}
      </a>
    </div>
    <p className="comment__body">
      {comment.body}
    </p>
  </li>
);
