import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <Post
        key={post.id}
        {...post}
      />
    ))}
  </>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
