import React from 'react';
import { ShapeUser } from '../Shapes/ShapeUser';

export const User = ({ user }) => (
  <>
    <span>{user.name}</span>
    <span>{user.email}</span>
  </>
);

User.propTypes = ShapeUser.isRequired;
