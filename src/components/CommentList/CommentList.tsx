import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <ul className="comments">
      <h3 className="comments__title">
        Comments:
      </h3>
      {comments.map(comment => (
        <li className="comments__item" key={comment.id}>
          <CommentInfo comment={comment} />
        </li>
      ))}
    </ul>
  );
};
