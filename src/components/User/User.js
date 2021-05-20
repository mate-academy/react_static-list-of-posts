import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => {
  const { street, city } = address;

  return (
    <>
      <div className="user__name">{`Name: ${name}`}</div>
      <div className="user__email">
        <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
      </div>
      <div className="user__address">{`Address: ${street}, ${city}`}</div>
    </>
  );
};

const TypeAddress = PropTypes.shape({
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
});

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: TypeAddress.isRequired,
};
