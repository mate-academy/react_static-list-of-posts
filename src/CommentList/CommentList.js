import React from 'react';
import PropTypes from 'prop-types';
import { ShapeComment } from '../Shapes';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    ShapeComment,
  ).isRequired,
};
