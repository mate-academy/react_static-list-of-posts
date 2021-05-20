import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="post__comments-list comments-list">
    {comments.map(comment => (
      <li className="comments-list__element comment" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
