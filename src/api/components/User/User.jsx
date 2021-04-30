import React from 'react';
import { UserType } from '../Types';

export const User = ({ curentUser }) => (
  <div>
    <p>This post by:</p>
    <i>{curentUser.name}</i>
    {', username: '}
    <i>{curentUser.username}</i>
    {', email: '}
    <i>{curentUser.email}</i>
    <p>
      {'Address: '}
      {curentUser.address.street}
      {'--'}
      {curentUser.address.suite}
      {'--'}
      {curentUser.address.city}
      {'--'}
      {curentUser.address.zipcode}
      {'-- Geo: '}
      {curentUser.address.geo.lat}
      {' | '}
      {curentUser.address.geo.lng}
    </p>
    <p>
      {'Phone: '}
      {curentUser.phone}
      {', Website: '}
      {curentUser.website}
      {', Company: '}
      {curentUser.company.name}
      {' | '}
      {curentUser.company.catchPhrase}
      {' | '}
      {curentUser.company.bs}
    </p>
  </div>
);

User.propTypes = {
  curentUser: UserType.isRequired,
};
