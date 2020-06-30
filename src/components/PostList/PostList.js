import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';
import './PostList.css';

const PostList = ({ posts }) => (
  <ul className="App__Post-List">
    {posts.map(post => <Post key={post.id} post={post} />)}
  </ul>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
