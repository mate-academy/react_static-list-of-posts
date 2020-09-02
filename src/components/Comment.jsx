import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <div>
    <div className="comments__author">
      <p>
        {'Name: '}
        {name}
      </p>
      <p>
        {'Email: '}
        {email}
      </p>
    </div>
    <p className="comments__body">{body}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
