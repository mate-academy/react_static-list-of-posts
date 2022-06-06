import React from 'react';
import { Comment } from '../../typedefs';

import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div>
      <p>{name}</p>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
};
