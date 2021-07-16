import React from 'react';
import PropTypes from 'prop-types';
import { Adress } from '../Adress/Adress';

export const User = ({ name, email, address }) => (
  <>
    <li>
      User name:
      {` ${name}`}
    </li>
    <li>
      Email:
      {` ${email}`}
    </li>
    <Adress address={address} />
  </>
);

User.propTypes = {
  address: PropTypes.objectOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  })).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
