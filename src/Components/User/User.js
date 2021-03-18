import React from 'react';
import './User.scss';
import { UserType } from '../../Types';

export const User = ({ name, email, address }) => (
  <div className="User">
    <h3>{name}</h3>
    <p><a href="mailto: office@enfold-health.com">{email}</a></p>
    <p>{`City: ${address.city}`}</p>
    <p>{`Street: ${address.street}`}</p>
    <p>{`Zipcode: ${address.zipcode}`}</p>
  </div>
);

User.propTypes = UserType;
