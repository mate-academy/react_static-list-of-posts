import React from 'react';
import PropTypes from 'prop-types';

export function User({ user }) {
  let address = [...Object.entries(user.address)];
  const geo = [...Object.entries(user.address.geo)];

  address.pop();
  address = [...address.map(e => e.join(' ')), ...geo.map(e => e.join(' '))];

  return (
    <>
      <h2>
        {user.name}
      </h2>
      <p>
        {user.email}
      </p>
      <p>
        {address.join(' ')}
      </p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.object.isRequired,
  }).isRequired,
};
