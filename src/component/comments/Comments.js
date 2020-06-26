import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../comment/Comment';
import './Comments.css';
import { ShapeComment } from '../Shapes/ShapeComment';

export const Comments = ({ comments }) => (
  <div className="comments">
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </div>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(ShapeComment).isRequired,
};
