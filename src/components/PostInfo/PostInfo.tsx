import React from 'react';
import { UserInfo } from '../UserInfo';
import { User } from '../../type/type';

type Props = {
  user: User | undefined,
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
