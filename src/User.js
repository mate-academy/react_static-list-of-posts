import React from 'react';
import PropTypes from 'prop-types';

const User = ({ item }) => {
  const { name, email } = item;
  const { street, suite, city, zipcode } = item.users.address;

  return (
    <>
      <p>
        {name}
        {' '}
        {email}
      </p>
      <p>
        {street}
        {' '}
        {suite}
        {' '}
        {city}
        {' '}
        {zipcode}
      </p>
    </>
  );
};

User.propTypes = {
  item: PropTypes.string.isRequired,
};

export default User;
