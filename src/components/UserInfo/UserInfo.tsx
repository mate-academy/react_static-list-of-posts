import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = (props) => (
  <>
    <a className="UserInfo" href={`mailto:${props.user?.email}`} key={props.user?.id}>
      {props.user?.name}
    </a>
  </>
);
