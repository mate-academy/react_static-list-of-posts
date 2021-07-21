import React from 'react';
import PropTypes from 'prop-types';

export const Comment = ({ name, body, email }) => (
  <ul>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-primary
      "
    >
      <strong>Name: </strong>
      {name}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-primary
      "
    >
      <strong>Message: </strong>
      {body}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-primary
      "
    >
      <strong>Email: </strong>
      {email}
    </li>
  </ul>
);

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
