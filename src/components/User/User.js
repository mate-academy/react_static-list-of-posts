import React from 'react';
import { UserProp } from '../Types';

export const User = ({ name, email, address }) => (
  <div className="post__author">
    <span className="user__name">{name}</span>
    <span className="user__email">
      {' '}
      {email}
    </span>
    <div className="user__address">
      <span>
        street:
        {address.street}
      </span>
      <span>
        suite:
        {address.suite}
      </span>
      <span>
        city:
        {address.city}
      </span>
      <div>
        zipcode:
        {address.zipcode}
      </div>
      <div>
        geo: lat(
        {address.geo.lat}
        ), lng(
        {address.geo.lng}
        )
      </div>
    </div>
  </div>
);

User.propTypes = UserProp.isRequired;
