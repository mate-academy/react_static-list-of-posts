import React from 'react';
import PropTypes from 'prop-types';

const User = ({ person }) => (
  <h3 className="post__user">
    {'name: '}
    {person.name}
    <br />
    {'email: '}
    {person.email}
    <br />
    {'address: '}
    {person.address.city}
  </h3>
);

User.propTypes = { person: PropTypes.objectOf.isRequired };

export default User;
