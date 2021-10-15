import React from 'react';
import { Comments } from '../types/Post';
import './compInfo.scss';

type Props = {
  comment: Comments;
};
export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, email, body,
  } = comment;

  return (
    <div className="compCover">
      <div>
        <strong>Author: </strong>
        {name}
      </div>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      <div>
        <strong>Comment: </strong>
        {body}
      </div>
    </div>
  );
};
