import React from 'react';
import { typePost } from '../../types';

const User = ({ post }) => (
  <div className="post__user">
    Author:
    {' '}
    <span>{post.user.name}</span>
    {', '}
    <span>{post.user.email}</span>
    {', '}
    <span>{post.user.address.city}</span>
  </div>
);

User.propTypes = typePost.isRequired;

export default User;
