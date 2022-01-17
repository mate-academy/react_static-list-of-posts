import React from 'react';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="has-text-right">{`posted by @${user.username} (${user.name}) <${user.email}>`}</p>
);
