import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div className="posts">
    {posts.map(currentPost => (
      <Post {...currentPost} key={currentPost.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default PostList;
