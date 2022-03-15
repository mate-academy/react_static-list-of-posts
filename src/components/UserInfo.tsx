import React from 'react';
import { User } from '../types/interfaces';

export const UserInfo: React.FC<Props> = ({
  name,
  username,
  email,
}) => (
  <>
    <div>
      <h3>Author:</h3>
      <p>{`name: ${name}`}</p>
      <p>{`username: ${username}`}</p>
      <p>{`email: ${email}`}</p>
    </div>
  </>
);

type Props = User;
