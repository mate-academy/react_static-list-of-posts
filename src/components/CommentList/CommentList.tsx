import React from 'react';
import { Card } from 'react-bootstrap';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Coment[] | null,
};

export const CommentList: React.FC<Props> = ({
  comments,
}) => (
  <>
    {comments?.map((comment: Coment) => (
      <Card as="li" key={comment.id}>
        <CommentInfo
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </Card>
    ))}
  </>
);
