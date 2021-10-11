import React from 'react';

import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="comments">
      <h2 className="comments__title">Comments</h2>
      <ul className="comments__list">
        {comments.map(comment => (
          <li key={comment.id} className="comments__item">
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};
