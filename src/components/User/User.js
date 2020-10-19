import React from 'react';
import { UserShape } from './UserShape';

const User = ({ user }) => (
  <div className="post__user">
    <span>{`${user.name} | `}</span>
    <span>{`${user.email} | `}</span>
    <span>
      {
        Object.values(user.address)
          .slice(0, Object.values(user.address).length - 2)
          .join(', ')
      }
    </span>
  </div>
);

User.propTypes = UserShape.isRequired;

export default User;
