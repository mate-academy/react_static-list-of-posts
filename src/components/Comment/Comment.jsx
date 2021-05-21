import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <div className="comment__info">
      {`Author: ${name}`}
      <br />
      {`Email: ${email}`}
      <br />
      {body}
    </div>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
