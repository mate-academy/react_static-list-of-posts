import React from 'react';
import './User.scss';
import { UserShape } from '../Shape';

export const User = ({ name, email, address }) => (
  <section className="user">
    <p className="user__name">
      {`Post by ${name}`}
    </p>
    <p className="user__email">{`Email: ${email}`}</p>
    <p className="user__address">{`City: ${address.city}`}</p>
  </section>
);

User.propTypes = UserShape;
