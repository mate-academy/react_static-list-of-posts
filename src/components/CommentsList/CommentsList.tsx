import React from 'react';
import { CommentInfo } from '../CommentInfo';

export type Props = {
  comments: Comment[];
};

export const CommentsList: React.FC<Props> = ({ comments }) => (
  <div className="section__comments">
    {comments.map(element => (
      <div
        key={element.id}
        className="comment-card"
      >
        <CommentInfo comments={element} />
      </div>
    ))}
  </div>
);
