import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../../types/User';
import avatar from '../../images/avatar.png';

type Props = {
  user: Pick<User, 'fullName' | 'email'>;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const lowercaseEmail = user.email.toLowerCase();

  return (
    <Card
      className="
        UserInfo
        d-flex
        flex-row
        align-items-center
        "
    >
      <img
        className="UserInfo__avatar me-2"
        src={avatar}
        alt="Avatar"
      />

      <div>
        <Card.Title className="UserInfo__fullName">
          {user.fullName}
        </Card.Title>

        <Card.Link
          className="UserInfo__email mb-2"
          href={`mailto: ${lowercaseEmail}`}
        >
          {lowercaseEmail}
        </Card.Link>
      </div>
    </Card>
  );
};
