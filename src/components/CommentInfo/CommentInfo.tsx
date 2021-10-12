import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comments';

type Props = {
  commentInf: Comment;
};

export const CommentInfo: React.FC<Props> = ({ commentInf }) => {
  return (
    <ul className="comments comments--info">
      <li>
        Name:
        {' '}
        {commentInf.name}
      </li>

      <li>
        Comment:
        {' '}
        {commentInf.body}
      </li>

      <li>
        Email:
        {' '}
        {commentInf.email}
      </li>
    </ul>
  );
};
