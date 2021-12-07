import React from 'react';
import { Comment } from '../../types';
import { CommentInfo } from '../Comment';
import './CommentsList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <div className="post__comments comments">
      <h4 className="comments__title">Comments:</h4>
      {comments.map(comment => (
        <div className="comments__item comment">
          <CommentInfo {...comment} key={comment.id} />
        </div>
      ))}
    </div>
  );
};
