import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h4 className="comment__title">{name}</h4>
    <div className="comment__main">
      <p className="comment__body">{body}</p>
      <a
        href={`mailto: ${email}`}
        className="user__email"
      >
        {email}
      </a>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
