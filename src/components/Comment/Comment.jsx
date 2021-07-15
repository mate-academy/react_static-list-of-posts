import React from 'react';
import PropTypes from 'prop-types';
import { commentTypes } from '../../commetTypes';

export const Comment = ({comment}) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <a href={comment.email}>{comment.email}</a>
  </>
);

Comment.propTypes = {
  comment: PropTypes.objectOf(commentTypes).isRequired,
};
