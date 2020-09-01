import React from 'react';
import PropTypes from 'prop-types';

const Comment = comment => (
  <>
    <div className="comments__author">
      <p>
        {'Name: '}
        {comment.name}
      </p>
      <p>
        {'Email: '}
        {comment.email}
      </p>
    </div>
    <p className="comments__body">{comment.body}</p>
  </>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
