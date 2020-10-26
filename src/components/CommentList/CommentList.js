import React from 'react';
import { CommentListShape } from '../Shapes/CommentListShape';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="comment-list">
    <h1 className="comment-list__title">
      Comments
    </h1>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </ul>
);

CommentList.propTypes = CommentListShape;
