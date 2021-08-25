import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    <h5>
      {'Post by '}
      <span className="post__author">{name}</span>
    </h5>
    <a className="post__link" href={`mailto:${email}`}>{email}</a>
  </>
);
