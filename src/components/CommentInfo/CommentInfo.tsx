import React from 'react';
import { Card } from 'react-bootstrap';

type Props = {
  postComment: PostComment,
};

export const CommentInfo: React.FC<Props> = ({ postComment }) => (
  <>
    <Card.Title>
      {postComment.name}
    </Card.Title>
    <Card.Link href={`mailto:${postComment.email}`}>
      {postComment.email}
    </Card.Link>
    <Card.Text>
      {postComment.body}
    </Card.Text>
  </>
);
