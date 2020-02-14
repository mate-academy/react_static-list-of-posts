import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

import './Comments.css';

export const Comments = ({ comments }) => (

  <ul className="comments">
    {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
  </ul>

);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
