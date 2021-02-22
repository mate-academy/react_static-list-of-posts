import React from 'react';
import { TypeComments, TypeUser } from '../types';
import { CommentList } from './CommentList';

export const User = ({ user, comments }) => (
  <div key={user.id}>
    <div className="userStyle">
      Author:
      {' '}
      <h2>{user.name}</h2>
      {' '}
      <strong>E-mail:</strong>
      {' '}
      {user.email}
      <strong>Street:</strong>
      {' '}
      {user.address.street}
      {' '}
      {user.address.suite}
      {' '}
      {user.address.city}
    </div>
    <CommentList comments={comments} />
  </div>

);

User.propTypes = {
  user: TypeUser.isRequired,
  comments: TypeComments.isRequired,
};

export default User;
