import React from 'react';
import PropTypes from 'prop-types';
import { userTypes } from '../../types';

export function User({ user }) {
  const { name, email, address } = user;

  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>
        {`${address.street}, `
        + `${address.suite}, `
        + `${address.city}, `
        + `${address.zipcode}`}
      </p>
    </>
  );
}

User.propTypes = PropTypes.arrayOf(userTypes).isRequired;
