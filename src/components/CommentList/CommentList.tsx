import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div className="section__comments">
    {comments.map(element => (
      <div className="comment-card">
        <CommentInfo comments={element} />
      </div>
    ))}
  </div>
);
