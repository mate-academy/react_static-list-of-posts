import React from 'react';
import { Comment } from '../Comment';
import { CommentListShape } from '../../shapes/CommentListShape';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
