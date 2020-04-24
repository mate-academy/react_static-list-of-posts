import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ name, email, body }) => (
  <li className="guest">
    <hr />
    <p className="guest_name">{name}</p>
    <p>{body}</p>
    <p>
      <a className="guest_email" href={`mailto:${email}`}>
        {email}
      </a>
    </p>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Comment;
