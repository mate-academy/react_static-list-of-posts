import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => posts.map(
  post => <Post key={post.id} post={post} />
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    { post: PropTypes.object }
  ).isRequired,
};

export default PostList;
