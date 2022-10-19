import React from 'react';
import { UserInfo, UserItem } from '../UserInfo';

type Props = {
  user: UserItem[],
  body: string,
  title: string
};

export const PostInfo: React.FC<Props> = ({ user, body, title }) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <UserInfo
        name={user[0].name}
        email={user[0].email}
      />
    </div>

    <p className="PostInfo__body">
      {body}
    </p>
  </>
);
