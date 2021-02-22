import React from 'react';
import './User.scss';
import { userType } from '../typedefs';

export const User = ({ name, email, address }) => (
  <>
    <p className="userInfo">
      {`Name of the author: ${name}`}

      <br />

      <span className="email">
        {`Email: ${email}`}
      </span>

      <br />

      {`Address: ${address.street}, ${address.suite},
       ${address.city}, ${address.zipcode}`}

      <br />

      {`Geo location: ${address.geo.lat}, ${address.geo.lng}`}
    </p>
  </>
);

User.propTypes = {
  name: userType.name.isRequired,
  email: userType.email.isRequired,
  address: userType.address.isRequired,
};
