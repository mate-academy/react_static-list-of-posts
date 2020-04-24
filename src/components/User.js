import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const User = ({ name, email, address }) => (
  <>
    <li className="user__item">
      <span className="user__name">{name}</span>
    </li>
    <li className="user__item">
      <span className="user__email">{email}</span>
    </li>
    <li className="user__item">
      <span className="user__city">
        {address.city}
        ,
      </span>
      <span className="user__street">
        {address.street}
        ,
      </span>
      <span className="user__zipcode">{address.zipcode}</span>
    </li>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
