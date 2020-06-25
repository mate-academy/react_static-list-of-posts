import React from 'react';
import { Comment } from '../Comment/Comment';
import { ShapeComment } from '../Shapes';

export const CommentList = ({ comments }) => (
  <un className="comments">
    {comments.map(comment => <Comment comment={comment} key={comment.id} />)}
  </un>
);

CommentList.propTypes = {
  comments: ShapeComment.isRequired,
};
