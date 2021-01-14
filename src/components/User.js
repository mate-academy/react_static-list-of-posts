import React from 'react';
import { UserTypes } from '../types';

export const User = ({ name, email, address }) => (
  <p className="posts__item-author">
    {name}
    {' '}
    {`<${email}>, `}
    {`${address.street} ${address.suite}`}
  </p>
);

User.propTypes = UserTypes.isRequired;
