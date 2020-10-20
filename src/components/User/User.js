import React from 'react';
import { userShape } from '../../shapes/userShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h3 className="user__name">
      {name}
    </h3>
    <p className="user__email">
      {`email: ${email}`}
    </p>
    <p className="user__address">
      {`address: ${address.suite}, 
      ${address.street}, ${address.city}. ${address.zipcode}`}
    </p>
  </div>
);

User.propTypes = userShape;
