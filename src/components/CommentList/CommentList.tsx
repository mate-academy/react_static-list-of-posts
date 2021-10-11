import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  reviews: Comment[],
};

export const CommentList: React.FC<Props> = ({ reviews }) => (
  <div className="post__comments">
    <h5>Comments:</h5>
    {reviews.map(comment => (
      <div className="post__comment" key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
