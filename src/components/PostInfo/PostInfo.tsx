import React from 'react';
import { UserInfo } from '../UserInfo';
import { User } from '../../types/User';

type Props = {
  user: User,
  body: string,
  title: string
};

export const PostInfo: React.FC<Props> = ({ user, body, title }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && (
        <UserInfo user={user} />
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>
  </>
);
