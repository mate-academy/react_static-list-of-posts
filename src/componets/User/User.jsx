import React from 'react';
import { UserType } from '../ListTypes';
import './User.css';

export const User = ({ user }) => (
  <>
    <p>
      <span className="name">
        Name:
      </span>
      {` ${user.name}`}
    </p>
    <p>
      <span className="name">
        Email:
      </span>
      {` ${user.email}`}
    </p>
    <p>
      <span className="name">
        Address:
      </span>
      {` ${user.address.city},
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
