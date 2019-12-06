import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  posts.map(post => (
    <Post currentPost={post} key={post.id} />
  ))
);

PostList.propTypes = { posts: PropTypes.arrayOf(PropTypes.object).isRequired };

export default PostList;
