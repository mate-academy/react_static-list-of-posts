import React from 'react';
import { ListGroup, Toast } from 'react-bootstrap';
import './CommentInfo.scss';

export const CommentInfo: React.FC<PostComment> = ({
  name,
  body,
  email,
}) => (
  <ListGroup.Item as="li">
    <Toast className="comment-info">
      <Toast.Header closeButton={false}>
        <strong className="me-auto">{name}</strong>
      </Toast.Header>
      <Toast.Body>{body}</Toast.Body>
      <Toast.Header closeButton={false}>
        <a href={`mailto:${email}`}>{email}</a>
      </Toast.Header>
    </Toast>
  </ListGroup.Item>
);
