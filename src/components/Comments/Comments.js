import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

import './Comments.css';

export const Comments = ({ comments }) => (
  <ul className="Comments">
    {comments.map(comment => <Comment key={comment.id} {...comment} />)}
  </ul>

);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
