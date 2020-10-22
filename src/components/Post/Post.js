import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import User from '../User/User';
import CommentList from '../CommentList/CommentList';

const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <Container fluid="md">
      <Card className="p-3 mb-3 bg-info" text="white">
        <Card.Body className="border rounded secondary bg-primary">
          <Card.Title
            className="text-center"
            style={{ fontSize: '26px' }}
          >
            {title}
          </Card.Title>
          <Card.Subtitle className="">
            <User user={user} />
          </Card.Subtitle>
          <Card.Text className="mb-5">{body}</Card.Text>
          <CommentList comments={comments} />
        </Card.Body>
      </Card>
    </Container>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired,
  }).isRequired,
};

export default Post;
