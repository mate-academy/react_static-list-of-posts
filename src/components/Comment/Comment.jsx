import React from 'react';
import PropTypes from 'prop-types';

import './comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comments">
    <div className="comments__profile">
      <div className="comments__profile-image">
        <img
          className="profile-img"
          src="https://img.icons8.com/dusk/100/000000/cat-profile.png"
          alt="profile"
        />
      </div>
      <div className="comments__profile-email">
        <strong>Login:</strong>
        {` ${email}`}
      </div>
    </div>
    <div className="comments__body">
      <div className="comments__body-name">
        {`Theme: ${name}`}
      </div>
      <div className="comments__body-text">{body}</div>
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
