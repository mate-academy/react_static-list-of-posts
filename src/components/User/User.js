import React from 'react';
import { AuthorType } from '../Types/Type';

const User = ({ name, email, address }) => (
  <div>
    <span>{name}</span>
    <a href="mailto:{email}">
      {email}
    </a>
    <span>
      {address.city}
      ,
      {address.street}
    </span>
  </div>
);

User.propTypes = AuthorType.isRequired;

export default User;
