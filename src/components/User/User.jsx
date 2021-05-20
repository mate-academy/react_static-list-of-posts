import React from 'react';
import { ProtoPost } from '../ProtoPost';

export const User = ({ post }) => (
  <div className="userInfo">
    <div>{post.user.name}</div>
    <a href={`mailto: ${post.user.email}`}>{post.user.email}</a>
    <div>{post.user.address.city}</div>
  </div>
);

User.propTypes = ProtoPost;
