import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

import Post from './Post';

const PostList = ({ items }) => (
  <ul>
    {items.map(post => (
      <li>
        <Post post={post} key={post.id} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
