import React from 'react';
import PropTypes from 'prop-types';

const User = ({ userData }) => (
  <>
    <li>
      <p className="description">User name</p>
      <p>{userData.name}</p>
    </li>
    <li>
      <p className="description">User email</p>
      <p>{userData.email}</p>
    </li>
    <li>
      <p className="description">User address</p>
      <p>{`${userData.address.city} ${userData.address.street}`}</p>
    </li>
  </>
);

User.propTypes
  = { userData: PropTypes.objectOf(PropTypes.string).isRequired };

export default User;
