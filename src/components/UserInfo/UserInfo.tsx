import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email, phone }) => (
  <div className="user">
    <p className="user__name" data-cy="name">{name}</p>

    <a href={`mailto: ${email}`} className="user__contact-link" data-cy="email">
      {`email: ${email}`}
    </a>

    <a href={`phoneto: ${phone}`} className="user__contact-link">
      {`phone: ${phone}`}
    </a>
  </div>
);
