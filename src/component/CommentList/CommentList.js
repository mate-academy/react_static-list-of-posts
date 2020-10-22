import React from 'react';
import './CommentList.scss';
import { Comment } from '../Comment/Comment';
import { CommentListShape } from '../propTypes/CommentListShape';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </div>
);

CommentList.propTypes = CommentListShape.isRequired;
