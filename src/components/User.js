import React from 'react';
import UserShape from './PropTypes/UserShape';

const User = ({ name, email, address }) => (
  <div>
    <span>
      {`Name: ${name} `}
    </span>
    <a href={`mailto:${email}`}>
      {`${email}`}
    </a>
    <p>
      <span>{`city: ${address.city}`}</span>
      <span>{`street: ${address.street}`}</span>
      <span>{`suit: ${address.suite}`}</span>
      <span>{`ZIP: ${address.zipcode}`}</span>
    </p>
  </div>
);

User.propTypes = UserShape;

export default User;
