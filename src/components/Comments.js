import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ name, body, email }) => (
  <div className="comments">
    <p className="bold-font">{name}</p>
    <p>{body}</p>
    <p className="email">{email}</p>
  </div>
);

Comments.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comments;
