import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h3>{name}</h3>
    <p>{body}</p>
    <span>{`User email: ${email}`}</span>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
