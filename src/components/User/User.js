import React from 'react';
import PropTypes from 'prop-types';
import { Address } from './Address/Address';
import { addressShape } from '../../Shapes/AddressShape';

export const User = (props) => {
  const { name, email, address } = props;

  return (
    <div className="user">
      <span>
        {name}
        &nbsp;
      </span>
      <span>{email}</span>
      <Address {...address} />
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: addressShape.isRequired,
};
