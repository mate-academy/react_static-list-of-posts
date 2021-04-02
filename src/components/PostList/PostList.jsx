import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(list => (
      <li className="post-list__item" key={list.id}>
        <Post {...list} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
