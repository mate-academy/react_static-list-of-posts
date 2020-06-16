import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.css';

const PostList = ({ posts }) => (
  <ul className="posts">
    {
      posts.map(post => <Post {...post} key={post.id} />)
    }
  </ul>
);

export { PostList };

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.any).isRequired,
};
