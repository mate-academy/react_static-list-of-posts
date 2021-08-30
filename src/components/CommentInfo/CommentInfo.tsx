import React from 'react';
import { Comments } from '../../types/Comments/Comments';

import './CommentInfo.scss';

interface Props {
  commentItem: Comments;
}

export const CommentInfo: React.FC<Props> = (props) => {
  const { commentItem } = props;
  const { name, email, body } = commentItem;

  return (
    <div className="comment">
      <div className="comment__name">{name}</div>
      <div className="comment__email">{email}</div>
      <div className="comment__body">{body}</div>
    </div>
  );
};
