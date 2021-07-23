import React from 'react';
import { UserType } from '../../types';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { street, suite, city, zipcode } = address;

  return (
    <ul className="user list-group">
      <li
        className="
          list-group-item
          list-group-item-action
          list-group-item-info
        "
      >
        <strong>Name: </strong>
        {name}
      </li>
      <li
        className="
          list-group-item
          list-group-item-action
          list-group-item-info
        "
      >
        <strong>Email: </strong>
        {email}
      </li>
      <li
        className="
          list-group-item
          list-group-item-action
          list-group-item-info
        "
      >
        <strong>Address: </strong>
        {`${street} ${suite}`
          + `${city} ${zipcode}`}
      </li>
    </ul>
  );
};

User.propTypes = (UserType);
