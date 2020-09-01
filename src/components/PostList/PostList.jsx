import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';

import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <ul className="post-list">

    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}

  </ul>
);

PostList.defaultProps = {
  posts: [],
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
};

export default PostList;
