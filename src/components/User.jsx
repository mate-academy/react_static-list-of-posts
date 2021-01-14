import React from 'react';
import { UserType } from './Types';

export const User = ({ name, email, address }) => (
  <p>
    Posted by:
    <i>
      {` ${name},
        <${email}>,
        ${address.city},
        ${address.street},
        ${address.suite}`
      }
    </i>
  </p>
);

User.propTypes = UserType;
