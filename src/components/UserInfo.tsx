import React from 'react';
import { Post } from '../types/Post';
// import { User } from '../types/User';

type Props = Pick<Post, 'user'>;

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h4 className="User__name">{user ? user.name : 'no name'}</h4>
    <span className="User_email">{user ? user.email : 'no email'}</span>
  </>
);
