import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const PostList = ({ users }) => (
  <ul>
    {users.map(user => (
      <User {...user} key={user.id} />
    ))}
  </ul>
);

const TypeGeo = PropTypes.shape({
  lat: PropTypes.string,
  lng: PropTypes.string,
});

const TypeAddress = PropTypes.shape({
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,

  geo: TypeGeo,
});

PostList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,

      address: TypeAddress,
    }),
  ).isRequired,
};
