import React from 'react';
import './User.scss';
import { UserType } from '../Types';

export const User = ({ name, email, address }) => (
  <div>
    <b>
      {`Name: `}
    </b>
    {name}
    <br />
    <b>
      {`Email: `}
    </b>
    <a href={`mailto:${email}`}>
      {email}
    </a>
    <br />
    <b>
      {`Address: `}
    </b>
    {address.city}
    {', '}
    {address.street}
    {', '}
    {address.suite}
  </div>
);

User.propTypes = UserType.isRequired;
