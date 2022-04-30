import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comment';
import './CommentList.scss';

type Props = {
  comments: Comment[],
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div data-cy="comments-list" className="comments__wrapper">
      <div className="comments__title">Comments:</div>
      {comments.map(comment => (
        <div className="comments__item comment">
          <CommentInfo
            name={comment.name}
            body={comment.body}
            email={comment.email}
            key={comment.id}
          />
        </div>
      ))}
    </div>
  );
};
