import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <div className="comment__user">
      <div className="comment__user-name">
        {name}
      </div>
      <div className="comment__user-email">
        {email.toLowerCase()}
      </div>
    </div>
    <p className="comment__text">
      {body}
    </p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
