import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import Post from '../post/Post';

const PostList = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.objectOf({}).isRequired,
};

export default PostList;
