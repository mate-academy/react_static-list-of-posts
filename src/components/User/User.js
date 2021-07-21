import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <ul className="user list-group">
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-info
      "
    >
      <strong>Name: </strong>
      {user.name}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-info
      "
    >
      <strong>Email: </strong>
      {user.email}
    </li>
    <li
      className="
        list-group-item
        list-group-item-action
        list-group-item-info
      "
    >
      <strong>Address: </strong>
      {`${user.address.street} ${user.address.suite}`
        + `${user.address.city} ${user.address.zipcode}`}
    </li>
  </ul>
);
User.defaultProps = ({
  user: {},
});
User.propTypes = ({
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      geo: PropTypes.shape({
        lat: PropTypes.string.isRequired,
        lng: PropTypes.string.isRequired,
      }),
    }),
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
      catchPhrase: PropTypes.string.isRequired,
      bs: PropTypes.string.isRequired,
    }),
  }),
});
