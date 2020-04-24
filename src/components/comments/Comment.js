import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <div className="comments__item">
    <p className="author">
      {name[0].toUpperCase() + name.slice(1)}
      <a href="mailto:example@gmail.com" className="author__email">{email}</a>
    </p>
    <p>
      {body[0].toUpperCase() + body.slice(1)}
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
