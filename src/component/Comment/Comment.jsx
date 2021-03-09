import React from 'react';
import PropTypes from 'prop-types';
import { commentsType } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape(commentsType).isRequired,
};
