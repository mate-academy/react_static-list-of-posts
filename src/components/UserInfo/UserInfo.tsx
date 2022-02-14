import React from 'react';
import './UserInfo.scss';

interface User {
  name: string;
  email: string;
}

type Prorp = {
  post: User;
};

export const UserInfo: React.FC<Prorp> = ({ post }) => (
  <div className="userInfo">
    <span className="userInfo__name">{post.name}</span>
    {' --- '}
    <a className="userInfo__mail" href={`mailto:${post.email}`}>{post.email}</a>
  </div>
);
