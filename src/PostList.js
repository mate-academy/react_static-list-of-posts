import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div className="post-wrapper">
    {posts.map(post => (
      <Post key={post.id} post={post} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
