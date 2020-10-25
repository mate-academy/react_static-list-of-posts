import React from 'react';
import './CommentList.scss';
import { Comment } from '../comment';
import { CommentListShape } from '../shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = CommentListShape;
