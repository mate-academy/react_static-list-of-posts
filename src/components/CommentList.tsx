import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentInfo';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="comments__list">
    Comments:
    {comments.map(comment => (
      <div key={comment.id}>
        <div className="comments__item">
          <CommentInfo comment={comment} />
        </div>
      </div>
    ))}
  </div>
);
