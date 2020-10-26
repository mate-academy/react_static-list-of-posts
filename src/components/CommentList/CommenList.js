import React from 'react';
import { CommentListShape } from '../shapes/CommentListShape';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="CommentList">
    <h3 className="CommentList__title">Comments</h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
