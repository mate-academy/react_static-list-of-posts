import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export function PostList({ objPosts }) {
  return (
    <>
      {objPosts.map(post => (
        <Post
          className="Post"
          key={post.id}
          {...post}
        />
      ))}
    </>
  );
}

PostList.propTypes = {
  objPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
