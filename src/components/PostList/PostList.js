import React from 'react';
import PropTypes from 'prop-types';

import ListGroup from 'react-bootstrap/ListGroup';

import { Post } from '../Post/Post';

export const PostList = (props) => {
  const { posts } = props;

  return (
    <ListGroup>
      {posts.map(post => (
        <ListGroup.Item
          key={post.id}
          variant="primary"
        >
          <Post {...post} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({}).isRequired,
  ).isRequired,
};
