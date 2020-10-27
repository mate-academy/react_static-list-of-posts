import React from 'react';
import { userShape } from '../shapes/userShape';

export const User = ({ name, address, email }) => (
  <>
    <p>{name}</p>
    <a className="post--email" href={`mailto:${email}`}>{email}</a>
    <p className="user__address">
      {`${address.suite}, ${address.street}, 
      ${address.city}. ${address.zipcode}`}
    </p>
  </>
);

User.propTypes = userShape;
