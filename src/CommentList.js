import React from 'react';
import { Comment } from './Comment';
import { CommentListShape } from './shapes/CommentListShape';

export const CommentList = ({ comments }) => (
  <div className="comments">
    {
      comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))
    }
  </div>
);

CommentList.propTypes = CommentListShape;
