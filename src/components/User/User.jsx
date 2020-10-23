import React from 'react';
import './User.scss';
import { userPropType } from '../propTypes/user';

export const User = (users) => {
  const { name, email } = users;
  const { street, suite, city, zipcode } = users.address;
  const { lat, lng } = users.address.geo;

  return (
    <div className="user">
      <h2 className="user__heading">User</h2>
      <p>{name}</p>
      <p>{email}</p>
      <p>
        Street:
        {street}
        , Suite:
        {suite}
        , City:
        {city}
        , Zipcode:
        {zipcode}
      </p>
      <p>
        Geolocation:
        {lat}
        ,
        {lng}
      </p>
    </div>
  );
};

User.propTypes = userPropType;
