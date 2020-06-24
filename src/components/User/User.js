import React from 'react';
import PropTypes from 'prop-types';
import Address from '../Address/Address';
import './User.css';

const User = props => (
  <div className="user">
    <div className="user__info">
      <div className="user__contacts">
        <p>{props.name.toUpperCase()}</p>
        <a href={`${props.email}`}>{props.email}</a>
      </div>
      <Address {...props.address} />
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
    geo: PropTypes.object,
    street: PropTypes.string,
    suite: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
};

export default User;
