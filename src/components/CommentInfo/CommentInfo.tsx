import React from 'react';
import { Card } from 'react-bootstrap';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Omit<Comment, 'postId' | 'id'>;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const lowercaseEmail = comment.email.toLowerCase();

  return (
    <Card className="CommentInfo">
      <Card.Body className="CommentInfo__container">
        <Card.Title className="CommentInfo__name">
          {comment.name}
        </Card.Title>

        <Card.Link
          className="CommentInfo__email"
          href={`mailto: ${lowercaseEmail}`}
        >
          {lowercaseEmail}
        </Card.Link>

        <Card.Text className="CommentInfo__body">
          {comment.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
