import React from 'react';
import { Comments } from './Comments';
import { CommentListShape } from './shapes/CommentListshape';
import './Comment.scss';

export const CommentList = ({ comments }) => (

  <div className="comment">
    <h2 className="comment__title">{ `Comments count: ${comments.length}`}</h2>
    {comments.map(comment => (
      <Comments key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = CommentListShape;
