import React from 'react';
import { Card } from 'react-bootstrap';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <>
    <Card.Header>
      {name}
    </Card.Header>
    <Card.Subtitle className="comment_email">
      {email}
    </Card.Subtitle>
    <Card.Text>
      {body}
    </Card.Text>
  </>
);
