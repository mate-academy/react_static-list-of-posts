import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ commentData }) => (
  <p>
    <b>Comment</b>
    {' '}
    {commentData.body}
  </p>
);

Comment.propTypes = {
  commentData: PropTypes.shape({
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
