import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './postList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(item => (
      <li className="post-list__item" key={item.id}>
        <Post {...item} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
