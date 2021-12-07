import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../../types/Comments';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="comments__wrapper">
      <div className="comments__title">Comments:</div>
      {comments.map(comment => (
        <div className="comments__item comment">
          <CommentInfo {...comment} key={comment.id} />
        </div>
      ))}
    </div>
  );
};
