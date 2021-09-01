import React from 'react';
import { Comments } from '../../types/Comment/Comment';

import './CommentInfo.scss';

interface Props {
  commentItem: Comments;
}

export const CommentInfo: React.FC<Props> = (props) => {
  const { commentItem } = props;
  const { name, email, body } = commentItem;

  return (
    <>
      <div className="comment__name">{name}</div>
      <div className="comment__email">{email}</div>
      <div className="comment__body">{body}</div>
    </>
  );
};
