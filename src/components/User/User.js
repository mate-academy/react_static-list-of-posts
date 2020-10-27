import React from 'react';
import { typeUser } from '../../types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user post__user">
    <p className="user__name">{`by ${name} from ${address.city}`}</p>
    <p className="user__email">{email}</p>
  </div>
);

User.propTypes = typeUser.isRequired;
