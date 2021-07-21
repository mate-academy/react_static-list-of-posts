import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'react-bootstrap';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <ListGroup>
    {posts.map(post => (
      <ListGroup.Item key={post.id}>
        <Post

          user={post.user}
          title={post.title}
          body={post.body}
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
