import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ post }) => (
  <ul>
    {post.map(posts => <Post post={posts} />)}
  </ul>
);

PostList.propTypes = {
  post: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default PostList;
