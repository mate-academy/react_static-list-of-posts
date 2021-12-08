import React from 'react';

import { Post } from '../../types/Post';
import './UserInfo.scss';

type Props = Omit<Post, 'id' | 'comments'>;

export const UserInfo: React.FC<Props> = ({ user, title, body }) => (
  <div className="post__user">
    <div className="post__user-info">
      <img className="post__image" src="./images/user.png" alt="avatar" />
      <div className="post__name">{user?.name}</div>
      <a className="todo__email" href="mailto:{email}">{user?.email}</a>
    </div>

    <div className="post__user-text">
      <h2 className="post__title">{title}</h2>
      <div className="post__body">{body}</div>
    </div>
  </div>
);
