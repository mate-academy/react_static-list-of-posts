import React from 'react';
import { Comment } from '../Comment';
import { CommentListShape } from '../Shapes/CommentListShape';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = CommentListShape;
