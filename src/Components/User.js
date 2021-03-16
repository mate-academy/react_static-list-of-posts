import React from 'react';
import { UserType } from '../types';

export function User({ user }) {
  return (
    <>
      <p>{user.name}</p>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </>
  );
}

User.propTypes = UserType.isRequired;
