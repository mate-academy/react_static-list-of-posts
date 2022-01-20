import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: PostComment[] | null,
};

export const CommentList: React.FC<Props> = ({
  comments,
}) => (
  <ListGroup as="ul">
    {comments?.map((postComment: PostComment) => (
      <Card as="li" key={postComment.id}>
        <Card.Body>
          <CommentInfo postComment={postComment} />
        </Card.Body>
      </Card>
    ))}
  </ListGroup>
);
