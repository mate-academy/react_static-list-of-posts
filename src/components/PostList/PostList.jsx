import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import Post from '../Post/Post';

const PostList = function({ posts }) {
  return (
    <ul className="PostList">
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
