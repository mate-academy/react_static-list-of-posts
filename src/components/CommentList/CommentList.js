import React from 'react';
import './CommentList.scss';

import { Comment } from '../Comment';
import { CommentListShape } from '../shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <div className="comments-list">
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
