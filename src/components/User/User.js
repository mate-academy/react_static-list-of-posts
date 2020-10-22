import React from 'react';
import { UserShape } from '../../shapes/UserShape';

import './User.scss';

export const User = ({ name, email, address }) => (
  <address className="author">
    {`Written by `}
    {name}
    {`. `}
    <br />
    <a href={email}>{email}</a>
    <br />
    {address.suite}
    {`, `}
    {address.street}
    <br />
    {address.city}
  </address>
);

User.propTypes = UserShape;
