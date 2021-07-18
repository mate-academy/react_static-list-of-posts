import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from '../../types';

export const User = ({ currentUser }) => (
  <>
    <p>{currentUser.name}</p>
    <p>{currentUser.email}</p>
    <p>
      {`${currentUser.address.city},`
      + `${currentUser.address.street} `
      + `${currentUser.address.suit} `
      + `(${currentUser.address.zipcode}).`}
    </p>
  </>
);

User.propTypes = {
  currentUser: PropTypes.arrayOf(userShape).isRequired,
};
