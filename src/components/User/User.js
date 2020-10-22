import React from 'react';
import { UserPropTypes } from '../propTypes/UserPropTypes';
import './User.scss';

export const User = ({ name, email, address }) => (
  <section className="user">
    <p className="user__name">
      {`Post by ${name}`}
    </p>
    <p className="user__email">
      {`Email: ${email}`}
    </p>
    <p className="user__city">
      {`City: ${address.city}`}
    </p>
  </section>
);

User.propTypes = UserPropTypes;
