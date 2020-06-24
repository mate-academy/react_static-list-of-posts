import React from 'react';
import PropTypes from 'prop-types';
import Address from '../Address/Address';
import './User.css';
import { addressShape } from '../Shapes/AddressShape';

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
  address: addressShape.isRequired,
};

export default User;
