import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';

const UserList = ({ list }) => (
  <div>
    {list.user.map(item => (
      <User info={item} />
    ))}
  </div>
);

UserList.propTypes
  = {
    list: PropTypes.oneOfType([PropTypes.object])
      .isRequired,
  };

export default UserList;
