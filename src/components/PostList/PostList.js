import React from 'react';
import propTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = props => (
  <ul>
    {props.posts.map(post => (
      <Post post={post} />
    ))}
  </ul>
);

PostList.propTypes = {
  posts: propTypes.shape({
    map: propTypes.func.isRequired,
  }).isRequired,
};

export default PostList;
