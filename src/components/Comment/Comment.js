import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => (
  <li className="comments__list_item">
    <p className="comments__list_name">{props.name.toUpperCase()}</p>
    <p className="comments__list_content">{props.body}</p>
    <a
      href={`${props.email}`}
      className="comments__list_email"
    >
      {props.email}
    </a>
  </li>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Comment;
