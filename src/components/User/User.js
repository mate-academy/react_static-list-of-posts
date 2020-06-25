import React from 'react';
import PropTypes from 'prop-types';
import Address from '../Address/Address';

const User = props => (
  <div>
    <h4>{props.name}</h4>
    <a href={`mailto:${props.email}`}>
      <small>{props.email}</small>
    </a>
    <Address {...props.address} />
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default User;
