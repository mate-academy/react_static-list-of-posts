import React from 'react';
import { userShape } from '../../types';

export const User = ({ currentUser }) => (
  <div>
    <p>{currentUser.name}</p>
    <p>{currentUser.email}</p>
    <p>
      {`${currentUser.address.city}, `
      + `${currentUser.address.street}, `
      + `${currentUser.address.suite}, `
      + `(${currentUser.address.zipcode}).`}
    </p>
  </div>
);

User.propTypes = {
  currentUser: userShape.isRequired,
};
