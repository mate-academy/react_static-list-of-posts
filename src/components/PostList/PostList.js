import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import Post from '../Post/Post';

const PostList = ({ posts }) => (
  <ul className="list">
    {posts.map(post => (
      <li
        key={post.id}
        className="list-group-item item list-group-item-warning"
      >
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PostList;
