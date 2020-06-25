import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';

const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => <PostItem key={post.id} {...post} />)}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PostList;
