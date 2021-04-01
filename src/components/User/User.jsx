import React from 'react';
import { userShape } from '../../types';

export const User = ({ user }) => (
  <div className="User">
    <p className="">{user.name}</p>
    <p>
      {`${user.address.city}, ${user.address.street} `
        + `${user.address.suite}, ${user.address.zipcode}`
      }
    </p>
    <p>
      {`${user.address.geo.lat}, ${user.address.geo.lng}`}
    </p>
  </div>
);

User.propTypes = {
  user: userShape.isRequired,
};
