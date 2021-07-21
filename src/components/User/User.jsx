import React from 'react';
import { TypeUser } from '../../types';

export const User = ({ user }) => (
  <>
    {`${user.name}`}
    <cite title="Source Title">
      <p>
        {`${user.email}, ${user.address.street},`
        + ` ${user.address.suite}, ${user.address.city},`
        + ` ${user.address.zipcode},`
        + `${user.address.geo.lat}, ${user.address.geo.lng}`}
      </p>
    </cite>
  </>
);

User.propTypes = {
  user: TypeUser.isRequired,
};
