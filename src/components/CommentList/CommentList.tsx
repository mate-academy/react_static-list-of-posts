import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

type Props = {
  postComments: PostComment[] | null,
};

export const CommentList: React.FC<Props> = ({ postComments }) => (
  <>
    <ListGroup as="ul" variant="flush">
      <h3 className="comment-list__title">Comments:</h3>
      {postComments?.map(postComment => (
        <CommentInfo {...postComment} />
      ))}
    </ListGroup>
    <strong>
      <a href="/" className="comment-list__sign-up">Sign up to leave a comment...</a>
    </strong>
  </>
);
