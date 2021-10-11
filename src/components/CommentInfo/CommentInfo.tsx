import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  commentInfo: Comment,
};

export const CommentInfo: React.FC<Props> = (props) => {
  const { commentInfo } = props;

  return (
    <>
      <ul className="comments comments--info">
        <li>
          Name:
          {' '}
          {commentInfo.name}
        </li>
        <li>
          Comment:
          {' '}
          {commentInfo.body}
        </li>
        <li>
          Email:
          {' '}
          {commentInfo.email}
        </li>
      </ul>
    </>
  );
};
