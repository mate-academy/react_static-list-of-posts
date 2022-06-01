import React from 'react';
import { Comment } from '../../types/comment';

import './CommentInfo.scss';

type Props = Comment;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <>
      <div className="comment">
        <h3 className="comment_name">{name}</h3>
        <p className="comment_body"><i>{body}</i></p>
        <div className="comment_email">{email}</div>
      </div>
    </>
  );
};
