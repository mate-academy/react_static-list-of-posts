import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <p>
    <b>Comment</b>
    {' '}
    {props.comments.body}
  </p>
);

Comment.propTypes = {
  comments: PropTypes.shape({
    body: PropTypes.string,
  }).isRequired,
};

export default Comment;
