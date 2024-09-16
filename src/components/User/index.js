import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

const User = ({ name, email, address }) => (
  <div className="wrap-user-block">
    <div className="user-block">
      <div className="user-title">Author</div>
      <div>
        name:
        {name}
      </div>
      <div>
        E-mail:
        {email}
      </div>
      <div>
        City:
        {address.city}
      </div>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
