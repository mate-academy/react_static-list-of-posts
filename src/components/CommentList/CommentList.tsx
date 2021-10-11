import React from 'react';

import './CommentList.scss';

import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul className="comments__list">
      {comments.map(comment => (
        <li key={comment.id} className="comments__item">
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
