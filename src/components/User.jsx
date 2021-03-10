import React from 'react';
import { UserType } from '../types';

export const User = ({ user }) => (
  <>
    <p>{`${user.name} from ${user.address.city}`}</p>
    <a href={`mailto:${user.email}`}>{user.email}</a>
  </>
);

User.propTypes = UserType.isRequired;
