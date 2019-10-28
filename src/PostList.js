import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
