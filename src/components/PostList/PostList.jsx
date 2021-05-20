import React from 'react';
import propTypes from 'prop-types';
import Post from '../Post/Post';

function PostList({ posts }) {
  return (
   <ul>
     { posts.map(post => <Post {...post}/>) }
   </ul>
  )
}

PostList.propTypes = {
  posts: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
