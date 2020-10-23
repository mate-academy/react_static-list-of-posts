import React from 'react';
import { Card, Container } from 'react-bootstrap';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';
import PostShape from '../../shapes/PostShape';

const Post = ({ title, body, user, comments }) => (
  <Container fluid="md">
    <Card className="p-3 mb-3 bg-info" text="white">
      <Card.Body className="border rounded secondary bg-primary">
        <Card.Title
          className="text-center"
          style={{ fontSize: '26px' }}
        >
          {title}
        </Card.Title>
        <Card.Subtitle>
          <User {...user} />
        </Card.Subtitle>
        <Card.Text className="mb-5">{body}</Card.Text>
        <CommentList comments={comments} />
      </Card.Body>
    </Card>
  </Container>
);

Post.propTypes = PostShape;

export default Post;
