import React from 'react';
import { UserType } from '../../types';

export const User = ({ name, email, address }) => (
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
      {`${address.street} ${address.suite}`
        + `${address.city} ${address.zipcode}`}
    </li>
  </ul>
);

User.propTypes = (UserType);
