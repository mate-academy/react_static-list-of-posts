import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = { posts: PropTypes.objectOf(PropTypes) };
PostList.defaultProps = { posts: 'no posts' };
export default PostList;
