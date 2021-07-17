import React from 'react';
import propTypes from 'prop-types';
import { Post } from '../Post';

export function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};
