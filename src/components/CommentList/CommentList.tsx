import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: PostComment[]
};

export const CommentList:React.FC<Props> = ({ comments }) => (
  <ListGroup as="ul">
    {comments.map(comment => (
      <CommentInfo key={comment.id} {...comment} />
    ))}
  </ListGroup>
);
