import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';

type Props = {
  commentText: Comment[];
};

export const CommentList: React.FC<Props> = ({ commentText }) => (
  <div className="user__comments comments">
    <strong>Comments:</strong>
    {commentText.map(comment => (
      <ul className="comments__list" key={comment.id}>
        <CommentInfo {...comment} />
      </ul>
    ))}
  </div>
);
