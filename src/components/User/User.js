import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = (props) => {
  const { userData } = props;

  return (
    <div className="user">
      <p className="user__name">{userData.name}</p>
      <p>{userData.email}</p>
      <p>{`${userData.address.city} ${userData.address.street}`}</p>
    </div>
  );
};

User.propTypes = {
  userData: PropTypes.objectOf(PropTypes.string).isRequired,
};
