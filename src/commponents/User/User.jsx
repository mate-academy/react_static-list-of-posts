import React from 'react';
import propTypes from 'prop-types';

import users from '../../api/users';

export const User = ({ userId }) => {
  const { name, email, address } = users.find(
    uniqUser => uniqUser.id === userId,
  );

  return (
    <>
      <p className="user__name">
        {`Author: ${name}`}
      </p>

      <p className="user__email">
        E-mail:
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </p>

      <p className="user__address">
        {`Adress: ${address.street}, ${address.suite}, ${address.city}`}
      </p>
    </>
  );
};

User.propTypes = {
  userId: propTypes.number.isRequired,
};
