import React from 'react';

import { userType } from '../../Types';

export const User = ({ name, email, address }) => (
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

User.propTypes = userType;
