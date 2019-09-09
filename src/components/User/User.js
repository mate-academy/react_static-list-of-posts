import React from 'react';
import './User.scss';

import { UserProps } from '../../constants/proptypes';

const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <div className="user">
      <p className="user--text">
        <span className="user__text">By</span>
        {name && (
          <span className="user__name">{name}</span>
        )}
      </p>
      <p className="user__email user--text">{email}</p>
      {address && (
        <p className="user__address user--text">
          {`${address.city}, ${address.street}`}
          <br />
          {address.zipcode}
        </p>
      )}
    </div>
  );
};

User.propTypes = UserProps;

User.defaultProps = {
  name: null,
  address: null,
};

export default User;
