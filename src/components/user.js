import React from 'react';

import { userProperties } from './propertiesVar';

export function User({ name, email, address }) {
  const { street, suite, city, zipcode } = address;

  return (
    <>
      <b>
        {name}
      </b>
      <a href="https://mail.google.com/">
        <br />
        {email}
      </a>
      <br />
      {`Adress: ${street} St. ${suite} ${city} ZIP:${zipcode}`}
    </>
  );
}

User.propTypes = {
  ...userProperties,
};
