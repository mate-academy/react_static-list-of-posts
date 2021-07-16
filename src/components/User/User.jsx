import React from 'react';
import { userPropTypes } from '../proptypes';

export const User = ({ name, email, address }) => (
  <div className="post__info">
    <p>{`Author: ${name}`}</p>
    <p>{`Email: ${email}`}</p>
    <p>{`Address: ${address.city}, ${address.street}, ${address.suite}`}</p>
  </div>
);

User.propTypes = userPropTypes;
