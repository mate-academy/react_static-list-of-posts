/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './UserInfo.scss';

import { User } from '../../types';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div data-cy="user-name" className="fw-lighter fst-italic">
      Posted by: {user.name}
    </div>
    <div className="fw-lighter fst-italic">{user.username}</div>
    <div
      data-cy="user-email"
      role="button"
      className="fw-lighter fst-italic text d-inline-block"
    >
      {user.email}
    </div>
    <div className="fw-lighter mb-2 fst-italic">
      {user.company && `From: ${user.company.name}`}
    </div>
  </>
);
