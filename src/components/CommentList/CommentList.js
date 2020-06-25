import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';

import './CommentList.css';

export const CommentList = ({ comments }) => (
  <ul className="comments">
    {comments.map(comment => (
      <Comment key={comment.id} {...comment} />
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
