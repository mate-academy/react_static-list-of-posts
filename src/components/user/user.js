import React from 'react';

import PropTypes, { object } from 'prop-types';

function User({ userId, users }) {
  const userObj = users.find(user => (user.id === userId));

  return (
    <>
      <strong>
        {userObj.name}
        {' '}
      </strong>
      <span>
        {userObj.email}
        {' '}
      </span>
      <span>
        {userObj.address.city}
        {' '}
      </span>
      <span>
        {userObj.address.street}
        {' '}
      </span>
      <span>
        {userObj.address.suite}
        {' '}
      </span>
    </>
  );
}

User.propTypes = {
  userId: PropTypes.number.isRequired,
  users: PropTypes.arrayOf(object).isRequired,
};

export default User;
