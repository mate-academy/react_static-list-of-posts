import React from 'react';
import PropTypes from 'prop-types';

import './CommentList.css';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="post__comments">
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
