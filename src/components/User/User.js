import React from 'react';
import { UserType } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <>
    <h3 className="user__name">{user.name}</h3>
    <a className="user__email" href={`mailto:${user.email}`}>
      {user.email}
    </a>
    <a
      className="user__address"
      href={
        `http://www.google.com/maps/place/
        ${user.address.geo.lng},${user.address.geo.lat}`
      }
    >
      City:
      {user.address.city}
      {` `}
      Street:
      {`${user.address.street} ${user.address.suite}`}
      {` `}
      Zip-Code:
      {user.address.zipcode}
    </a>
  </>
);

User.propTypes = {
  user: UserType.isRequired,
};
