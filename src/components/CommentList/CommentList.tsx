import React from 'react';
import { CommentListProps } from '../../types/Comment';

export const CommentList:
React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <p>No comments yet</p>
    ) : (
      comments.map(comment => (
        <div key={comment.id} className="CommentInfo">
          <div className="CommentInfo__name">
            {comment.name}
          </div>
          <div className="CommentInfo__body">
            {comment.body}
          </div>
        </div>
      ))
    )}
  </div>
);
