import React from 'react';
import { UserType } from '../ListTypes';

export const User = ({ user }) => (
  <>
    <p className="postList__user-name">
      Name:
      {user.name}
    </p>
    <p className="postList__email">
      Email:
      {user.email}
    </p>
    <p className="postList__address">
      Name:
      {`${user.address.city},
      ${user.address.street},
      ${user.address.suite}`}
    </p>
  </>
);

User.defaultProps = {
  user: '',
};

User.propTypes = {
  user: UserType,
};
