import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { Comment } from '../../types/Comment';

type Props = {
  comments: Comment[],
};

export const CommentInfo:React.FC<Props> = ({ comments }) => (
  <ListGroup>
    {comments.map(comment => (
      <ListGroup.Item as="li" key={comment.id}>
        <Card.Title>{comment.name}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
        <Card.Link href={`mailto:${comment.email}`}>{comment.email}</Card.Link>
      </ListGroup.Item>
    ))}
  </ListGroup>
);
