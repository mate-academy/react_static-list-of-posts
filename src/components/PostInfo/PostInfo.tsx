import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

export const PostInfo: React.FC<PreparedPost> = ({
  title,
  user,
  body,
  comments,
}) => (
  <>
    <ListGroup.Item as="li">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          {user && <UserInfo user={user} />}
        </Card.Body>
        <CommentList postComments={comments} />
      </Card>
    </ListGroup.Item>
    <div className="post-info__bottom"> </div>
  </>
);
