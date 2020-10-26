import React from 'react';
import './User.scss';
import { UserShape } from '../propTypes/user';

export const User = (users) => {
  const { name, email } = users;
  const { street, suite, city, zipcode } = users.address;
  const { lat, lng } = users.address.geo;

  return (
    <div className="user">
      <h2 className="user__heading">User</h2>
      <p className="user__name">{name}</p>
      <p className="user__email">{email}</p>
      <p className="user__address">
        {`
          Street: ${street}, Suite: ${suite}, City: ${city}
          Zipcode: ${zipcode}
        `}

      </p>
      <p className="user__geo">
        { `Geolocation:${lat} ${lng}` }
      </p>
    </div>
  );
};

User.propTypes = UserShape;
