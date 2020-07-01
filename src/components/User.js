import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ userData }) => (
  <>
    <li>
      <p className="wrapper__caption">User name</p>
      <p>{userData.name}</p>
    </li>
    <li>
      <p className="wrapper__caption">User email</p>
      <p>{userData.email}</p>
    </li>
    <li>
      <p className="wrapper__caption">User address</p>
      <p>{`${userData.address.city} ${userData.address.street}`}</p>
    </li>
  </>
);

User.propTypes = { userData: PropTypes.objectOf(PropTypes.string).isRequired };

export default User;
