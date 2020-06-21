import React from 'react';
import PropType from 'prop-types';
import { Address } from './Address/Address';

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
  name: PropType.string.isRequired,
  email: PropType.string.isRequired,
  address: PropType.objectOf.isRequired,
};
