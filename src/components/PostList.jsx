import React from 'react';
import { PropTypes } from 'prop-types';
import { Post } from './Post';

export function PostList({ preparedPosts }) {
  return (
    <div>
      {preparedPosts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
