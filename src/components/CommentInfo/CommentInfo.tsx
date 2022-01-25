import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <li className="Comment">
    {comment
      && (
        <>
          <p className="Comment__name">
            {comment.name || 'No name...'}
          </p>
          <p className="Comment__body">
            {comment.body || 'Empty'}
          </p>
          <p className="Comment__email">
            {comment.email || 'Unknown'}
          </p>
        </>
      )}
  </li>

);
