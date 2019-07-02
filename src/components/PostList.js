import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

import Post from './Post';

const PostList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li>
        <Post data={item} />

      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;

