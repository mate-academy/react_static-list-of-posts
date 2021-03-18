import React from 'react';
import { UserType } from '../../types';

export const User = ({
  name,
  email,
  address,
}) => {
  const { street, suite, city } = address;

  return (
    <>
      {`Author: ${name}`}
      <br />
      <a href={`mailto:${email}`}>{email}</a>
      <br />
      <a
        href="https://goo.gl/maps/nuTu2tRudP7SJoW96"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`${street} St., `}
        {suite}
        <br />
        {city}
      </a>
    </>
  );
};

User.propTypes = UserType;
