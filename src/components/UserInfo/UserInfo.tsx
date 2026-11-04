import React from 'react';
import { User } from '../../types/user';

export const UserInfo: React.FC<{ user: User }> = props => (
  <>
    <p>
      {' Posted by  '}
      <a className="UserInfo" href={`mailto:${props.user.email}`}>
        {props.user.name}
      </a>
    </p>
  </>
);
