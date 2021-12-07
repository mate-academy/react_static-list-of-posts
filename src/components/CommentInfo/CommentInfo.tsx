import React from 'react';
import { Comments } from '../../types/Comments';

import './CommentInfo.scss';

type Props = Pick<Comments, 'name' | 'body' | 'email'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <>
      <h3 className="posts__comment-name">
        {name}
      </h3>
      <div className="posts__comment-message">
        {body}
      </div>
      <div className="posts__comment-email">
        <span>{email}</span>
      </div>
    </>
  );
};
