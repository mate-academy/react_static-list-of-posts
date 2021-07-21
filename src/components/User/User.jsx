import React from 'react';
import { UserPropTypes } from '../../types';

export const User = ({ name, email, address }) => (
  <>
    <h4 className="title is-4">{name}</h4>
    <p>
      {`Email: ${email}`}
    </p>
    <p>
      {`City: ${address.city}`}
    </p>
    <p>
      {`Zipcode: ${address.zipcode}`}
    </p>
  </>
);

User.propTypes = UserPropTypes;
