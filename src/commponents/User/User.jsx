import React from 'react';
import propTypes from 'prop-types';

import { userType } from '../../Types';

export const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <>
      <p className="user__name">
        {`Author: ${name}`}
      </p>

      <p className="user__email">
        E-mail:
        <a href={`mailto:${email}`}>
          {user.email}
        </a>
      </p>

      <p className="user__address">
        {`Adress: ${address.street}, ${address.suite}, ${address.city}`}
      </p>
    </>
  );
};

User.propTypes = {
  user: propTypes.shape(userType).isRequired,
};
