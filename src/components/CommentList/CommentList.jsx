import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <div className="post__commentList commentList">
    {comments.map(comment => (
      <Comment {...comment} />
    ))}
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
