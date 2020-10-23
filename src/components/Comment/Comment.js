import React from 'react';
import PropTypes from 'prop-types';

import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div>
    <h3 className="comment__title">{name}</h3>
    <p className="comment__text">{body}</p>
    <p className="comment__mail">{`from ${email}`}</p>
  </div>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
