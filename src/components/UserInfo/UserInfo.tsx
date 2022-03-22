import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../../types/User';

type Props = {
  user: Pick<User, 'fullName' | 'email'>;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <Card className="UserInfo">
    <Card.Title className="UserInfo__fullName">
      {user.fullName}
    </Card.Title>

    <Card.Link
      className="UserInfo__email mb-2 text-muted"
      href={`mailto: ${user.email}`}
    >
      {user.email}
    </Card.Link>
  </Card>
);
