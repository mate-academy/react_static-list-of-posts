import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Link href={`mailto:${user.email}`}>{user.email}</Card.Link>
  </Card.Body>
);
