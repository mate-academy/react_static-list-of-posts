import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <p>
      {comment.name}
    </p>
    <p>
      {comment.body}
    </p>
    <a href={`mailto: ${comment.email}`}>
      {comment.email}
    </a>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.shape.isRequired,
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    CommentType,
  }).isRequired,
};
