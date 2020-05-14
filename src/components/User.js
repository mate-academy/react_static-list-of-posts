import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <div className="post__user">
    Author:
    {' '}
    {user.name}
    <Address address={user.address} />
    E-mail:
    {' '}
    {user.email}
  </div>
);

const Address = ({ address }) => (
  <div className="post__user-address">
    Address:
    {' '}
    {address.city}
    ,
    {' '}
    {address.street}
    ,
    {' '}
    {address.suite}
  </div>
);

User.propTypes = PropTypes.arrayOf({}).isRequired;
Address.propTypes = PropTypes.arrayOf({}).isRequired;
