import React from 'react';
import PropTypes from 'prop-types';
import { CommentsType } from '../../types';

export const Comment = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape(CommentsType).isRequired,
};
