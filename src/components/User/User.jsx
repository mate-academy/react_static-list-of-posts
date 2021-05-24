import React from 'react';
import PropTypes from 'prop-types';

const User = ({ username, email, address }) => (
  <>
    <h3>
      {username}
    </h3>
    <p>
      {`Contact info `}
      <i>{email}</i>
    </p>
    <p>
      {`From `}
      <i>{address.city}</i>
    </p>
  </>
);

User.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
