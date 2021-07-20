import React from 'react';
import { UserShape } from '../Shapes';

export const User = ({ user }) => (
  <div className="user">
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>
      {`${user.address.city}, `
        + `${user.address.street}, `
        + `${user.address.suite}, `
        + `(${user.address.zipcode}),`
        + `(${user.address.geo.lat}),`
        + `(${user.address.geo.lng}).`}
    </p>
  </div>
);

User.propTypes = {
  user: UserShape.isRequired,
};
