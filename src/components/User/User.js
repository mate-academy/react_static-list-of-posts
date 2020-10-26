import React from 'react';
import './User.scss';
import { UserShape } from '../../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="user">
    <strong>{name}</strong>
    <i>{email}</i>
    <i>{`${address.street} ${address.suite} ${address.city}`}</i>
  </div>
);

User.propTypes = UserShape;
