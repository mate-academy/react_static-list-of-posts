import React from 'react';
import PropTypes from 'prop-types';
import Post from '../post/Post';
import { typePost } from '../../types';

const PostList = ({ posts }) => (
  <ul className="posts">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </ul>
);

export default PostList;

PostList.propTypes = {
  posts: PropTypes.arrayOf(typePost).isRequired,
};
