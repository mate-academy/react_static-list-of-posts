import React from 'react';
import { Card } from 'react-bootstrap';

export const UserInfo:React.FC<User> = ({ ...user }) => (
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Link href={`mailto:${user.email}`}>{user.email}</Card.Link>
  </Card.Body>
);
