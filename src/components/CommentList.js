import React from 'react';
import { Comments } from './Comments';
import { CommentListShape } from './shapes/CommentListshape';

export const CommentList = ({ comments }) => (

  <div>
    {comments.map(comment => (
      <Comments key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
