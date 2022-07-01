import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="author">
    <h2 className="author__title">Author</h2>
    <p className="author__name" data-cy="user-name">{`Name: ${user.name}`}</p>
    <a href={`mailto:${user.email}`} className="author__email" data-cy="user-email">{`Email: ${user.email}`}</a>
  </div>
);
