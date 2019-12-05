import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  posts.map(currentPost => (
    <Post post={currentPost} key={currentPost.id} />
  ))
);

PostList.propTypes = { posts: PropTypes.arrayOf(PropTypes.object) };

export default PostList;
