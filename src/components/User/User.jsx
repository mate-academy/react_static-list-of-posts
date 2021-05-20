import React from 'react';
import PropTypes from 'prop-types';
import { TypeAddress } from '../../types';

export const User = ({ name, email, address }) => (
  <li>
    <span>
      <strong>{`${name} posted:`}</strong>
    </span>

    <br />
    <br />

    <span>
      Address:
    </span>

    <br />

    <span>
      {`city: ${address.city}`}
      ,
    </span>

    <br />

    <span>
      {`street: ${address.street}`}
      ,
    </span>

    <br />

    <span>
      {`suite: ${address.suite}`}
      .
    </span>

    <br />

    <span>
      {`zipcode: ${address.zipcode}`}
      .
    </span>

    <br />
    <br />

    <span>
      {`email: ${email}`}
    </span>

    <br />
    <br />

  </li>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,

  address: TypeAddress.isRequired,
};
