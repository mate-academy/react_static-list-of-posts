import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './style.css';

export const CommentList = ({ comments }) => (
  <div className="coment">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
