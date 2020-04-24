import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <>
    <p className="comment__name">{name}</p>
    <p className="comment__body">{body}</p>
    <a href={`mailto:${email}`} className="comment__email">
      {email}
    </a>
  </>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
