import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

import './CommentList.scss';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <div className="comments">
      <h2 className="comments__title">Comments </h2>
      <ul className="comments__list">
        {comments.map(comment => (
          <li className="comments__item" key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>

    </div>
  );
};
