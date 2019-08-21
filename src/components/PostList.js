import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Post item={item} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
