import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ListGroup>
    {posts.map(post => (
      <ListGroup.Item key={post.id}>
        <Post
          user={post.user}
          userId={post.userId}
          body={post.body}
          title={post.title}
          comments={post.comments}
        />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
