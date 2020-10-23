import React from 'react';
import './CommentList.scss';
import { Comment } from '../Comment/Comment';
import { CommentListShape } from '../shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
