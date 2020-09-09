import React from 'react';
import { UserPropTypes } from './PropTypes';

export const User = ({ user }) => (
  <div className="address">
    <h3>User</h3>
    <ul type="none">
      <li>
        <strong>Name:</strong>
        {' '}
        {user.name}
      </li>
      <li>
        <strong>Email:</strong>
        {' '}
        {user.email}
      </li>
      <li>
        <strong>Address:</strong>
        <ul type="none">
          <li>
            <strong>street: </strong>
            {user.address.street}
          </li>
          <li>
            <strong>suite: </strong>
            {user.address.suite}
          </li>
          <li>
            <strong>city: </strong>
            {user.address.city}
          </li>
          <li>
            <strong>zipcode: </strong>
            {user.address.zipcode}
          </li>
          <li>
            <strong>geo: </strong>
            lat:
            {' '}
            {user.address.geo.lat}
            ,
            lng:
            {' '}
            {user.address.geo.lng}
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

User.propTypes = UserPropTypes;

User.defaultProps = {
  user: {},
};
