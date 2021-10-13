import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="user__comments comments">
    <strong>Comments:</strong>
    {comments.map(comment => (
      <ul className="comments__list" key={comment.id}>
        <CommentInfo {...comment} />
      </ul>
    ))}
  </div>
);
