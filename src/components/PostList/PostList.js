import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

import './PostList.scss';

const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>

);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PostList;
