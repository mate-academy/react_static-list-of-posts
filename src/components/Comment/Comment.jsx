import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p className="comment__name">
      {name}
    </p>
    <p>
      {body}
    </p>
    <p className="comment__email">
      {email}
    </p>
  </div>
);

Comment.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType).isRequired,
  ),
};

Comment.defaultProps = {
  comments: [],
};
