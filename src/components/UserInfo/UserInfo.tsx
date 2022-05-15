import React from 'react';
import './UserInfo.scss';
import { User } from '../../interfaces/User';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span data-cy="name">
      🚶
      {user.name}
      &#160;&#160;📧
      <a href={`mailto:${user.email}`} data-cy="email">{user.email}</a>
    </span>
    &#160;&#160;
    <mark>
      ⬅️    This inline string is rendered by&#160;
      <b>
        &#34;UserInfo&#34;
      </b>
      &#160;component
    </mark>
  </>
);
