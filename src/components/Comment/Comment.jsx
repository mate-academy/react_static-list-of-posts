import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../types';

export const Comment = ({ comment }) => (
  <li className="comments__item">
    <div className="comments__name">
      {comment.name}
    </div>

    <div className="comments__body">
      {comment.body}
    </div>

    <div className="comments__email">
      {comment.email}
    </div>
  </li>
);

Comment.propTypes = {
  comment: PropTypes.shape(CommentType).isRequired,
};
