import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <>
    <div>
      <b>{'name - '}</b>
      {name}
    </div>
    <div>
      <b>{'email - '}</b>
      {email}
    </div>
    <div>
      <b>{'address: '}</b>
      <ul>
        <li>
          {address.city}
        </li>
        <li>
          {address.street}
        </li>
        <li>
          {address.suite}
        </li>
        <li>
          {address.zipcode}
        </li>
      </ul>
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(
    {
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    },
  ).isRequired,
};
