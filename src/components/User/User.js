import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <>
    <h2 className="user-name">
      {name}
    </h2>
    <p>
      {email}
    </p>
    <p>
      {JSON.stringify(address, null, 4)}
    </p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default User;
