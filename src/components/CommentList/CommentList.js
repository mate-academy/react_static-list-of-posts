import React from 'react';
import PropTypes from 'prop-types';
import { ShapeComment } from '../Shapes/ShapeComment';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <div className="comment__list">
    {comments.map(comment => (
      <>
        <Comment key={comment.id} {...comment} />
        <hr />
      </>
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(ShapeComment).isRequired,
};
