import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import { Post } from '../Post/Post';
import { PostListShape } from './PostListShape';

const createPost = post => (
  <ListGroup.Item
    key={post.id}
    variant="primary"
  >
    <Post {...post} />
  </ListGroup.Item>
);

export const PostList = (props) => {
  const { posts } = props;

  return (
    <ListGroup>
      {posts.map(createPost)}
    </ListGroup>
  );
};

PostList.propTypes = PostListShape.isRequired;
