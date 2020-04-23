import React from 'react';
import PropTypes from 'prop-types';

import './PostList.css';

import Post from '../Post/Post';

const PostList = ({ postList }) => (
  <ul className="posts">
    {postList.map(post => (
      <li className="posts__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
