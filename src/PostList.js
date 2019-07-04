import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList({ posts }) {
  return (
    <div>
      {posts.map(post => (
        <Post postsUser={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOff({
    post: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostList;
